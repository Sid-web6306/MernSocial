const express = require('express');
const router = express.Router();
const passport = require('passport');
const usersConrtollerr = require('../controllers/user_controller');


router.get('/profile', usersConrtollerr.profilee);

router.get('/signUp', usersConrtollerr.signUp);
router.get('/signIn', usersConrtollerr.signIn);
router.post('/create', usersConrtollerr.create);
router.get('/signOut', usersConrtollerr.signOut);
// router.post('/create-session', usersConrtollerr.createSession);



// use passport as a middleware to authenticate
router.post('/create-Session', passport.authenticate(
    'local',
    {failureRedirect: '/users/sign-in'},
), usersConrtollerr.createSession);
module.exports = router;