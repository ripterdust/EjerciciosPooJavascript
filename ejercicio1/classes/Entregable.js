class Entregable {
    #prestado;
    entregar() {
        this.#prestado = true;
    }
    devolver() {
        this.#prestado = false;
    }
    isEntregado() {}
}

module.exports = Entregable;
