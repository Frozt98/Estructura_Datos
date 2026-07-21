# Buffer Circular de Frames de Video — Proyecto Vite + Azure

## 1. Correrlo localmente

```bash
npm install
npm run dev
```

Abre la URL que muestra Vite (normalmente `http://localhost:5173`).

## 2. Compilarlo para producción

```bash
npm run build
```

Esto genera la carpeta `dist/` con los archivos estáticos finales (HTML, JS y CSS
minificados). Puedes previsualizarla con `npm run preview`.

## 3. Subirlo a GitHub

```bash
git init
git add .
git commit -m "Buffer circular de frames - proyecto"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/ring-buffer-video-demo.git
git push -u origin main
```

## 4. Desplegarlo en Azure Static Web Apps

1. Entra al [Azure Portal](https://portal.azure.com) → **Crear un recurso** → busca
   **Static Web App** → **Crear**.
2. Completa:
   - **Suscripción / Grupo de recursos**: el que tengas disponible (o crea uno nuevo).
   - **Nombre**: por ejemplo `ring-buffer-video-demo`.
   - **Plan de hosting**: **Free** (gratis, suficiente para un proyecto de clase).
   - **Origen del código fuente**: GitHub → autoriza tu cuenta → elige el repo y la rama `main`.
   - **Detalles de compilación**:
     - Preajuste: **Custom**
     - App location: `/`
     - Api location: *(déjalo vacío)*
     - Output location: `dist`
3. Azure crea automáticamente el archivo `.github/workflows/azure-static-web-apps-*.yml`
   en tu repo (ya te dejé uno de referencia en este proyecto por si necesitas
   reconstruirlo manualmente).
4. Cada `git push` a `main` dispara el GitHub Action: instala dependencias,
   corre `npm run build` y sube el contenido de `dist/` a Azure.
5. En unos minutos tu app queda disponible en una URL tipo
   `https://ring-buffer-video-demo.azurestaticapps.net`.

## ¿Por qué Static Web Apps y no App Service?

Este proyecto es un frontend puro: no hay backend, base de datos ni lógica de
servidor — todo el buffer circular corre en el navegador del usuario. Azure
Static Web Apps es el servicio hecho justo para eso: hosting de sitios
estáticos/SPA con CI/CD de GitHub incluido y capa gratuita. Azure App Service
sería necesario solo si más adelante agregan un backend real (por ejemplo, un
servidor Node.js que reciba video por sockets).

## Estructura del proyecto

```
├── index.html                 # entrada de Vite
├── src/
│   ├── main.js                # lógica de la interfaz (productor/consumidor)
│   ├── ringBuffer.js           # la clase RingBuffer (tu estructura de datos)
│   └── style.css
├── staticwebapp.config.json   # ruteo y tipos MIME para Azure
└── .github/workflows/         # pipeline de despliegue
```
