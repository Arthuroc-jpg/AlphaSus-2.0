const express = require('express');
const IndexController = require('../controller/indexController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();
const control = new IndexController();
const auth = new authMiddleware();

router.get('/',auth.verLogin.bind(auth),control.index);
module.exports = router;
