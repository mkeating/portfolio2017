const passport = require('passport');

exports.login = passport.authenticate('local', {
	failureRedirect: '/login', 
	successRedirect: '/'
});

exports.logout = (req, res) => {
	req.logout();
	res.redirect ('/');
}

exports.isLoggedIn = (req, res, next) => {
	if(req.isAuthenticated()) {
		//console.log(req.user);
		next();
		return;
	}
	console.log('you must be logged in to do that');
	res.redirect('/login');
}