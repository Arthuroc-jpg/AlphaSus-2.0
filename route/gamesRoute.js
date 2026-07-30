const express = require('express');
const GamesController = require('../controller/gamesController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();
const control = new GamesController();
const auth = new authMiddleware();

router.use(auth.verLogin.bind(auth));
router.get('/',control.index);
router.get('/:jogo',control.abrirJogo);
router.post('/:jogo/comentar', control.comentar);


module.exports = router;
