const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const slug = require('slugs');

const projectSchema = new mongoose.Schema({

	title:{
		type: String,
		trim: true,
		required: 'Please enter a title',
	},
	slug: String,
	description:{
		type: String,
		trim: true,
	}, 
	tools: [String],

	directLink: String,
	
	githubLink: String, 
	
	created: {
		type: Date, 
		default: Date.now,
	},
	image: String

}, { collection: 'Project' });

projectSchema.pre('save', function(next) {
	
	this.slug = slug(this.title);
	next();
});

module.exports = mongoose.model('Project', projectSchema);