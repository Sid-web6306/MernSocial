const express = require('express');

const router = express.Router();
const homeController =require('../controllers/home_controller_action');
console.log('router loadeddddddddddddddddddddddddddddddd');

router.get('/',homeController.home);

module.exports = router;