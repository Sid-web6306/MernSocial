const passport = require('passport');
const { deleteOne } = require('../models/user');

const LocalStrategy = require('passport-local').Strategy;

const User = require('../models/user');
passport.use(new LocalStrategy({
    usernameField: 'email'
},
    function (email, password) {
        //find user establish identity
        User.findOne({
            email: email
        }, function (err, user) {
            if (err) {
                console.log('errrrrrrrrr');
                return done(err);
            }
            if (!user || user.password != password) {
                console.log('err id pass');
                return done(null, false);
            }
            return done(null, user);
        })
    })
)