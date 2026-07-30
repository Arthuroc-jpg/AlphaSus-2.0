const express = require('express');
const LoginController = require('../controller/loginController');

const router = express.Router();
const control = new LoginController();

router.get('/',control.login);
router.get('/logout', control.sair);
router.post('/', control.auth);
module.exports = router;
