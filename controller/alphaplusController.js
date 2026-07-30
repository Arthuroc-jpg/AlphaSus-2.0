const comentarios = require("../model/comentarioModel");

class AlphaController {

    index(req, res) {
        res.render('alphaplus/index');
    }

    abrirFilme(req,res) {
            const filme = req.params.filme;
    
            res.render("alphaplus/filmes/" + filme, {filme: filme, comentarios: comentarios.listar(filme)})
        }
    
        comentar(req,res) {
            const filme = req.params.filme;
    
            comentarios.adicionar(filme, "AlphaSus User", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvndglI7xm0JILlJk4XGQXQ9y5gCMGo9iUvOebp4TujaVj4vr5qpMyyUY&s=10", req.body.comentario);
    
            res.redirect("/alphaplus/" + filme);
        }
}

module.exports = AlphaController;