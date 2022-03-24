class VideoJuego {
    #titulo;
    #horas;
    #entregado;
    #genero;
    #compania;

    constructor(
        titulo = 'GTA V',
        horas = 10,
        entregado = false,
        genero = 'Accion',
        compania = 'Rockstar Games'
    ) {
        this.#titulo = titulo;
        this.#horas = horas;
        this.#entregado = entregado;
        this.#genero = genero;
        this.#compania = compania;
    }

    getData() {
        return {
            titulo: this.#titulo,
            horasestimadas: this.#horas,
            genero: this.#genero,
            compania: this.#compania,
        };
    }

    setData(
        titulo = this.#titulo,
        horas = this.#horas,
        genero = this.#genero,
        compania = this.#compania
    ) {
        this.#titulo = titulo;
        this.#horas = horas;
        this.#genero = genero;
        this.#compania = compania;
    }
}

module.exports = VideoJuego;
