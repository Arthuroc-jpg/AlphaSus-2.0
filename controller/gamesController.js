const comentarios = require("../model/comentarioModel");

class GamesController {

    index(req, res) {res.render('games/games');}

    abrirJogo(req,res) {
        const jogo = req.params.jogo;

        res.render("games/" + jogo, {jogo: jogo, comentarios: comentarios.listar(jogo)})
    }

    comentar(req,res) {
        const jogo = req.params.jogo;

        comentarios.adicionar(jogo, "AlphaSus User", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvndglI7xm0JILlJk4XGQXQ9y5gCMGo9iUvOebp4TujaVj4vr5qpMyyUY&s=10", req.body.comentario);

        res.redirect("/games/" + jogo);
    }
}


module.exports = GamesController;