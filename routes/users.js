const express = require('express');
const router = express.Router();

const usersConrtollerr = require('../controllers/user_controller');

console.log('router 2222222 loaded');

router.get('/profile', usersConrtollerr.profilee);

module.exports = router;