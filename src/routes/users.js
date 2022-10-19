const express = require('express');
const router = express.Router();
const registerValidator = require('../validations/registerValidator');
const loginValidator = require('../validations/loginValidator');
const profileValidator = require('../validations/profileValidator');
const {uploadImageAvatar} = require('../middlewares/uploadImg');

const userSessionCheck = require('../middlewares/userSessionCheck');
const {register, login, processRegister, processLogin, profile, logout, update} = require('../controllers/usersController');


router.get('/register', register);
router.post('/register', processRegister);
router.get('/login', login);
router.post('/login', processLogin);
router.get('/logout', logout);
router.get('/profile', profile);
router.put('/profile',uploadImges.array('avatar',1), update);


module.exports = router;