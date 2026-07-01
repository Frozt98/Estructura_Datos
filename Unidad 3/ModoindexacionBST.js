class NodoBusqueda{
constructor(keyword, urlCache){
    this.keyword = keyword;
    this.urlCache = urlCache;
    this.visitas = 1;
    this.derecho = null;
}
}
class MotorIndexacionBST {
    constructor() {
        this.raiz = null;
    }

    //Indexar nueva consulta en el historial
    indexar(keyword, urlCache){
        const nuevoNodo = new NodoBusqueda(keyword, urlCache);
        if(this.raiz == null){
            this.raiz = nuevoNodo;
            return;

        }
        let actual = this.raiz;
        while(true){
            if(keyword === actual.keyword){
                actual.visitas++;
                return;
            }else if(keyword < actual.keyword){
                if(actual.izquierdo == null){
                    actual.izquierdo = nuevoNodo;
                    return;
                }actual = actual.izquierdo;
            }else{
                if(actual.derecho == null){
                    actual.derecho = nuevoNodo;
                    return;
                }
            }
    }
}

_insertarNodo(nodoActual, nuevoNodo) {
    const comparacion = nuevoNodo.keyword.localeCompare(nodoActual.keyword);
    if (comparacion === 0) {
        nodoActual.visitas++;
        return;
    } 
    if (comparacion < 0) {
        if (nodoActual.izquierdo === null) {
            nodoActual.izquierdo = nuevoNodo;
        } else {
            this._insertarNodo(nodoActual.izquierdo, nuevoNodo);
        }
    } 
    else {
        if (nodoActual.derecho === null) {
            nodoActual.derecho = nuevoNodo;
        } else {
            this._insertarNodo(nodoActual.derecho, nuevoNodo);
        }
    }
}
}