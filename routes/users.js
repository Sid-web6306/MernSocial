const express = require('express');
const router = express.Router();

const usersConrtollerr = require('../controllers/user_controller');


router.get('/profile', usersConrtollerr.profilee);

router.get('/signUp', usersConrtollerr.signUp);
router.get('/signIn', usersConrtollerr.signIn);
router.post('/create', usersConrtollerr.create);
router.post('/create-session', usersConrtollerr.createSession);
router.get('/signOut', usersConrtollerr.signOut);


module.exports = router;