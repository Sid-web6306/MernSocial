// const express = require('express');

// const router = express.Router();
// const homeController =require('../controllers/home_controller_action');
// console.log('router loadeddddddddddddddddddddddddddddddd');

// router.get('/',homeController.home);
// router.use('/user',require('./users'));
// module.exports = router;

const express = require('express');

const router = express.Router();
const homeController = require('../controllers/home_controller_action');

console.log('router loaded');


router.get('/', homeController.home);
router.use('/users', require('./users'));

// for anty further routes, access from here
// router.use('/routerName', require('./routerfile));


module.exports = router;