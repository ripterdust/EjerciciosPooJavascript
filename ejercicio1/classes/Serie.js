class Serie {
    #titulo;
    #noTemporadas;
    #entregado;
    #genero;
    #creador;
    constructor(
        titulo = 'Rick & Morty',
        noTemporadas = 3,
        entregado = false,
        genero = 'SciFi',
        creador = 'Justin Roiland'
    ) {
        this.#titulo = titulo;
        this.#noTemporadas = noTemporadas;
        this.#entregado = entregado;
        this.#genero = genero;
        this.#creador = creador;
    }

    getData() {
        return {
            titulo: this.#titulo,
            temporadas: this.#noTemporadas,
            genero: this.#genero,
            creador: this.#creador,
        };
    }

    setData(
        titulo = this.#titulo,
        temporadas = this.#noTemporadas,
        genero = this.#genero,
        creador = this.#creador
    ) {
        this.#titulo = titulo;
        this.#noTemporadas = temporadas;
        this.#genero = genero;
        this.#creador = creador;
    }
}

module.exports = Serie;
