const mongoose = require('mongoose');
const Project = mongoose.model('Project');

exports.projectPage = (req, res) => {
	
	res.render('index', {title: 'projects'});
}