class ComentariosModel {

    constructor() {this.comentarios = [];}

    adicionar(jogo, usuario, foto, texto) {
        this.comentarios.push({
            jogo,
            usuario,
            foto,
            texto,
            data: new Date()
        });
    }

    listar(jogo) {return this.comentarios.filter(c => c.jogo == jogo);}

}

module.exports = new ComentariosModel();