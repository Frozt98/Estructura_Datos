let expr = 'mangos'

switch (expr) {
    case 'mangos':
        console.log('los mangos cuestan 5 x $1')
        break;
    case 'naranjas':
        console.log('las naranajas 10 x $1')
        break;
    case 'manzanas':
        console.log('Las manzanas estan a 5 x$1')
        break;
    default:
        console.log(`Lo siento no tenemos esa fruta ${expr}`)
        break;
}
console.log("Quiere comprar algo adicional")