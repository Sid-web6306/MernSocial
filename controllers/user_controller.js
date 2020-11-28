const User = require('../models/user');


module.exports.profilee = function (req, res) {
     return res.render('user_profile', {
          title: "MernSocial | UserProfile"
     });
}

module.exports.signUp = function (req, res) {
     return res.render('user_sign_up', {
          title: "MernSocial | SignUp"
     });
}

module.exports.signIn = function (req, res) {
     return res.render('user_sign_in', {
          title: "MernSocial | signIn"
     });
}




// get the sign up data
module.exports.create = function (req, res) {
     if (req.body.password != req.body.confirm_password) {
          return res.redirect('back');
     }

     User.findOne({ email: req.body.email }, function (err, user) {
          if (err) { console.log('error in finding user in signing up'); return }

          if (!user) {
               User.create(req.body, function (err, user) {
                    if (err) { console.log('error in creating user while signing up'); return }

                    return res.redirect('/users/signIn');
               })
          } else {
               return res.redirect('back');
          }

     });
}


// sign in and create a session for the user
module.exports.createSession = function (req, res) {
     // steps to authenticate
 
}