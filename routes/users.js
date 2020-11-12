
module.exports = router;

const express = require('express');
const router = express.Router();

const usersConrtoller = require('../controllers/users_controller');
console.log('router 2222222 loadeddddddddddddddddddddddddddddddd');

router.get('/profile', usersConrtoller.profile);


module.exports = router;