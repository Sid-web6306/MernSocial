module.exports.profilee = function(req, res){
     return res.render('user_profile', {
          title: "MernSocial | UserProfile"
      });
}

module.exports.signUp = function(req, res){
     return res.render('user_profile', {
          title: "MernSocial | SignUp"
      });
}

module.exports.signIn = function(req, res){
     return res.render('user_profile', {
          title: "MernSocial | signIn"
      });
}