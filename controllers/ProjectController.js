const mongoose = require('mongoose');
const Project = mongoose.model('Project');

exports.getProjects = async (req, res) => {
	
	let projects = await Project.find();
	console.log('getting projects');
	console.log(projects);
	res.render('index', {title: 'projects', projects});
}


exports.getProject = async (req, res) => {

	let project = await Project.findOne({slug:req.params.slug});

	console.log(project);
	res.render('project', {project});
}

exports.addProject = (req, res) => {
	res.render('addProject', {});
}

exports.createProject = async (req, res) => {
	const project = await (new Project(req.body)).save();
	await project.save();

	res.redirect(`/${project.slug}`);
}
