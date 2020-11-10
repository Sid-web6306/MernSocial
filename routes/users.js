const express = require('express');

const router = express.Router();
const userController =require('../controllers/user_controller');
console.log('router 2222222 loadeddddddddddddddddddddddddddddddd');

router.get('/profile',userController.profile);

module.exports = router;