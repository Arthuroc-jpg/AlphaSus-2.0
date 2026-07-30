const express = require('express');
const CreditosController = require('../controller/creditosController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();
const control = new CreditosController();
const auth = new authMiddleware();

router.use(auth.verLogin.bind(auth));
router.get('/',control.creditos);
module.exports = router;
