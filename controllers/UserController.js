const mongoose = require('mongoose');
const User = mongoose.model('User');
const promisify = require('es6-promisify');


exports.loginForm = (req, res) => {
	res.render('login', {title: 'Login'});
}

exports.registerForm = (req, res) => {
	res.render('register', {title: 'Register'});
}

exports.validateRegister = (req, res, next) => {

	console.log('running validateRegister');
	req.sanitizeBody('name');
	req.checkBody('name', 'You must supply a name').notEmpty();
	req.checkBody('email', 'You must supply an email').isEmail();
	req.sanitizeBody('email').normalizeEmail({
		remove_dots: false,
		remove_extension: false,
		gmail_remove_subaddress: false
	});
	req.checkBody('password', 'You must supply a password').notEmpty();
	req.checkBody('password-confirm', 'This cannot be blank').notEmpty();
	req.checkBody('password-confirm', 'Your passwords dont match').equals(req.body.password);

	const errors = req.validationErrors();


	//TODO: this doesn't seem to be working
	if (errors) {
		//req.flash('error', errors.map(err => err.mgs));
		res.render('register', {title: 'Register', body: req.body});
		return; //if errors, stop the function
	}

	next(); //no errors
}

exports.register = async (req, res, next) => {

	console.log('running register');
	const user = new User({email: req.body.email, name: req.body.name});
	const register = promisify(User.register, User);
	await register(user, req.body.password);
	next(); //pass to authController
}
