const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const slug = require('slugs');

const blogSchema = new mongoose.Schema({

	title:{
		type: String,
		trim: true,
		required: 'Please enter a title',
	},
	slug: String,
	body: String,
	excerpt:{
		type: String,
		trim: true,
	}, 
	tags: [String], 
	created: {
		type: Date, 
		default: Date.now,
	},
	image: String

}, {'collection': 'Blog'});

blogSchema.pre('save', function(next) {
	if (!this.isModified('name')){
		next();
		return;
	}
	this.slug = slug(this.name);

	if(!this.isModified('body')){
		next();
		return;
	}
	this.excerpt = this.body.slice(0,50);
	next();
});

module.exports = mongoose.model('Blog', blogSchema);