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
	links:{
		direct: String,
		github: String
	}, 
	created: {
		type: Date, 
		default: Date.now,
	},
	image: String

}, { collection: 'Project' });

projectSchema.pre('save', function(next) {
	if (!this.isModified('name')){
		next();
		return;
	}
	this.slug = slug(this.name);
	next();
});

module.exports = mongoose.model('Project', projectSchema);