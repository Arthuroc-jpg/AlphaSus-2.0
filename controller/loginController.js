class LoginController {

    login(req, res) {
        res.render('login', {erro: null});
    }

    auth(req,res) {

    //User já logado
    if (req.session.dadosLogin && req.session.dadosLogin.logado) 
    return res.render('login', {erro: "Você já está logado."});

       const {user,senha} = req.body;

     if(user==="alphasus" && senha==="alphasus") {
    req.session.dadosLogin = {nome:"AlphaSus User",logado:true};
    return res.redirect("/");
    }
    res.render('login', {erro: "Usuário ou senha inválidos"}); 
    }

    sair(req,res) {
        req.session.destroy();
        res.redirect("/login");
    }
}

module.exports = LoginController;