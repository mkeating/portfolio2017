const mongoose = require('mongoose');
const Project = mongoose.model('Project');

exports.getProjects = async (req, res) => {
	
	let projects = await Project.find();
	console.log('getting projects');
	console.log(projects);
	res.render('index', {title: 'projects', projects});
}

