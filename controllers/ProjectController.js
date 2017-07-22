const mongoose = require('mongoose');
const Project = mongoose.model('Project');

exports.getProjects = async (req, res) => {
	
	let projects = await Project.find();
	console.log('getting projects');
	console.log(projects);
	res.render('index', {title: 'projects', projects});
}


exports.getProject = async (req, res) => {
	let project = await Project.findOne({id:res.params.id});

	res.render('project', {project});
}
