const express = require('express');
const AlphaController = require('../controller/alphaplusController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();
const control = new AlphaController();
const auth = new authMiddleware();

router.use(auth.verLogin.bind(auth));
router.get('/',control.index);
router.get('/:filme',control.abrirFilme);
router.post('/:filme/comentar', control.comentar);

module.exports = router;
