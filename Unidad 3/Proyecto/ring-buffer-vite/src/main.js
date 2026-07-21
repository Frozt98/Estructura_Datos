import './style.css';
import { RingBuffer } from './ringBuffer.js';

let rb = new RingBuffer(10);
let producerTimer = null, consumerTimer = null;
let running = false;
let latencyHistory = [];

const srcVideo = document.getElementById('srcVideo');
const producerCanvas = document.getElementById('producerCanvas');
const consumerCanvas = document.getElementById('consumerCanvas');
const pCtx = producerCanvas.getContext('2d');
const cCtx = consumerCanvas.getContext('2d');
producerCanvas.width = 320; producerCanvas.height = 180;
consumerCanvas.width = 320; consumerCanvas.height = 180;

const capSlider = document.getElementById('capSlider');
const fpsSlider = document.getElementById('fpsSlider');
const readSlider = document.getElementById('readSlider');
const lagSlider = document.getElementById('lagSlider');
const capVal = document.getElementById('capVal');
const fpsVal = document.getElementById('fpsVal');
const readVal = document.getElementById('readVal');
const lagVal = document.getElementById('lagVal');
const playBtn = document.getElementById('playBtn');
const camBtn = document.getElementById('camBtn');
const fileInput = document.getElementById('fileInput');

const statOcc = document.getElementById('statOcc');
const statLat = document.getElementById('statLat');
const statMax = document.getElementById('statMax');
const statDisc = document.getElementById('statDisc');
const sparkCanvas = document.getElementById('sparkCanvas');
const sparkCtx = sparkCanvas.getContext('2d');

function resizeSpark(){
  sparkCanvas.width = sparkCanvas.clientWidth * 2;
  sparkCanvas.height = sparkCanvas.clientHeight * 2;
}
window.addEventListener('resize', resizeSpark);

const svgNS = "http://www.w3.org/2000/svg";
const ringSvg = document.getElementById('ringSvg');
const CX = 130, CY = 130, R = 95, SLOT_R = 11;

function buildRing(n){
  ringSvg.innerHTML = '';
  for(let i=0;i<n;i++){
    const angle = (i / n) * Math.PI * 2 - Math.PI/2;
    const x = CX + R * Math.cos(angle);
    const y = CY + R * Math.sin(angle);
    const c = document.createElementNS(svgNS,'circle');
    c.setAttribute('cx', x);
    c.setAttribute('cy', y);
    c.setAttribute('r', SLOT_R);
    c.setAttribute('class','slot');
    c.setAttribute('id','slot-'+i);
    ringSvg.appendChild(c);
  }
  const wLabel = document.createElementNS(svgNS,'text');
  wLabel.setAttribute('id','ptr-write'); wLabel.setAttribute('class','ptr write');
  wLabel.setAttribute('text-anchor','middle');
  ringSvg.appendChild(wLabel);
  const rLabel = document.createElementNS(svgNS,'text');
  rLabel.setAttribute('id','ptr-read'); rLabel.setAttribute('class','ptr read');
  rLabel.setAttribute('text-anchor','middle');
  ringSvg.appendChild(rLabel);
}

function renderRing(){
  const n = rb.capacidad;
  for(let i=0;i<n;i++){
    const el = document.getElementById('slot-'+i);
    if(!el) continue;
    el.classList.remove('occupied','flash');
    let occupied = false;
    for(let k=0;k<rb.tamanoActual;k++){
      if((rb.frente + k) % n === i){ occupied = true; break; }
    }
    if(occupied) el.classList.add('occupied');
    if(i === rb.lastFlashIndex) el.classList.add('flash');
  }
  const angleW = (rb.fin / n) * Math.PI * 2 - Math.PI/2;
  const angleR = (rb.frente / n) * Math.PI * 2 - Math.PI/2;
  const wLabel = document.getElementById('ptr-write');
  const rLabel = document.getElementById('ptr-read');
  wLabel.setAttribute('x', CX + (R+22) * Math.cos(angleW));
  wLabel.setAttribute('y', CY + (R+22) * Math.sin(angleW) + 4);
  wLabel.textContent = 'fin';
  rLabel.setAttribute('x', CX + (R+22) * Math.cos(angleR));
  rLabel.setAttribute('y', CY + (R+22) * Math.sin(angleR) + 4);
  rLabel.textContent = 'frente';
}

function updateStats(){
  statOcc.textContent = `${rb.tamanoActual}/${rb.capacidad}`;
  const lat = Math.round(rb.latencia());
  statLat.textContent = `${lat} ms`;
  statLat.className = 'value ' + (lat > 500 ? 'warn' : 'ok');
  const fps = parseInt(fpsSlider.value,10);
  statMax.textContent = `${Math.round(rb.capacidad * (1000/fps))} ms`;
  statDisc.textContent = rb.framesDescartados;
  statDisc.className = 'value' + (rb.framesDescartados > 0 ? ' warn' : '');

  latencyHistory.push(lat);
  if(latencyHistory.length > 60) latencyHistory.shift();
  drawSpark();
}

function drawSpark(){
  const w = sparkCanvas.width, h = sparkCanvas.height;
  sparkCtx.clearRect(0,0,w,h);
  if(latencyHistory.length < 2) return;
  const max = Math.max(...latencyHistory, 50);
  sparkCtx.beginPath();
  sparkCtx.strokeStyle = '#57C7D4';
  sparkCtx.lineWidth = 3;
  latencyHistory.forEach((v,i)=>{
    const x = (i/(latencyHistory.length-1)) * w;
    const y = h - (v/max) * (h*0.85) - 4;
    if(i===0) sparkCtx.moveTo(x,y); else sparkCtx.lineTo(x,y);
  });
  sparkCtx.stroke();
}

function captureFrame(){
  if(srcVideo.readyState < 2) return;
  pCtx.drawImage(srcVideo, 0, 0, producerCanvas.width, producerCanvas.height);
  const snapshot = pCtx.getImageData(0,0,producerCanvas.width,producerCanvas.height);
  rb.escribir(snapshot);
  renderRing();
  updateStats();
}

function consumeFrame(){
  const frame = rb.leer();
  if(frame){
    cCtx.putImageData(frame.data, 0, 0);
  }
  renderRing();
  updateStats();
}

function scheduleProducer(){
  clearInterval(producerTimer);
  const fps = parseInt(fpsSlider.value,10);
  producerTimer = setInterval(captureFrame, 1000/fps);
}
function scheduleConsumer(){
  clearInterval(consumerTimer);
  const fps = parseInt(readSlider.value,10);
  const lag = parseInt(lagSlider.value,10);
  consumerTimer = setInterval(consumeFrame, (1000/fps) + lag);
}

capSlider.addEventListener('input', ()=>{
  capVal.textContent = capSlider.value;
  rb = new RingBuffer(parseInt(capSlider.value,10));
  latencyHistory = [];
  buildRing(rb.capacidad);
  renderRing();
  updateStats();
});
fpsSlider.addEventListener('input', ()=>{
  fpsVal.textContent = fpsSlider.value;
  if(running) scheduleProducer();
  updateStats();
});
readSlider.addEventListener('input', ()=>{
  readVal.textContent = readSlider.value;
  if(running) scheduleConsumer();
});
lagSlider.addEventListener('input', ()=>{
  lagVal.textContent = lagSlider.value + 'ms';
  if(running) scheduleConsumer();
});

fileInput.addEventListener('change', (e)=>{
  const file = e.target.files[0];
  if(!file) return;
  srcVideo.srcObject = null;
  srcVideo.src = URL.createObjectURL(file);
  srcVideo.play();
});

camBtn.addEventListener('click', async ()=>{
  try{
    const stream = await navigator.mediaDevices.getUserMedia({video:true});
    srcVideo.src = '';
    srcVideo.srcObject = stream;
    srcVideo.play();
  }catch(err){
    alert('No se pudo acceder a la cámara. Prueba subiendo un archivo de video en su lugar.');
  }
});

playBtn.addEventListener('click', ()=>{
  running = !running;
  if(running){
    if(srcVideo.paused) srcVideo.play().catch(()=>{});
    scheduleProducer();
    scheduleConsumer();
    playBtn.textContent = 'Pausar';
  } else {
    clearInterval(producerTimer);
    clearInterval(consumerTimer);
    playBtn.textContent = 'Iniciar';
  }
});

buildRing(rb.capacidad);
renderRing();
updateStats();
setTimeout(resizeSpark, 50);
