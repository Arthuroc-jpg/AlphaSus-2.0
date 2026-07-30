class authMiddleware {
    
    verLogin(req, res, next){

    if(req.session.dadosLogin && req.session.dadosLogin.logado)
    return next();

    res.redirect('/login');
}
}
module.exports = authMiddleware;