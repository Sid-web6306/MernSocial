
//below is a action
module.exports.home = function (req, res) {
    console.log(req.cookies);
    res.cookie('user_id', 25);
    return res.render('home', {
        title: "Home"
    });
    //  return res.end('<h1>aaaaa express for mernSocial</h1>')
}