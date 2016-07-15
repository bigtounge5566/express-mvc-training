var numeral = require('numeral');
var bcrypt = require('bcrypt-nodejs');
var dateFormat = require('dateformat');

exports.loggedIn = function(req, res, next)
{
	console.log(req.session);
	if (req.user) {
		next();
	} else {
		res.redirect('/login');
	}
}
exports.home = function(req, res) {
	res.render('index.ejs', {
		error : req.flash("error"),
		success: req.flash("success"),
		session: req.session,
		title: 'home',
		username: req.user.name
	 });
}
exports.signup = function(req, res) {
	if (req.session.user) {
		res.redirect('/home');
	} else {
		res.render('signup', {
			error : req.flash("error"),
			success: req.flash("success"),
			session:req.session
		});
	}
}
exports.login = function(req, res) {
	if (req.session.user) {
		res.redirect('/home');

	} else {
		res.render('login', {
			error : req.flash("error"),
			success: req.flash("success"),
			session:req.session
		});
	}
}
