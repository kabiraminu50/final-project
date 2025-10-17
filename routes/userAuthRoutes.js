const express = require('express')
const authMiddleware = require('../middleware/authMiddleware');
const {signUp,login,prof} = require('../controller/authroutes');
const router = express.Router();

router.post('/signup',signUp);
router.post('/login',login);
router.get('/prof',authMiddleware,prof)

module.exports = router