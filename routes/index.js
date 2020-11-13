const express = require('express');
const router = express.Router();

const homeController = require('../controllers/home_controller_action');

console.log('router 1111 loaded');

router.get('/', homeController.home);
router.use('/users', require('./users'));

// for anty further routes, access from here
// router.use('/routerName', require('./routerfile));

module.exports = router;