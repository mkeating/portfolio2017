const mongoose = require('mongoose');
const Blog = mongoose.model('Blog');

exports.getBlogs = async (req, res) => {
	
	const blogs = await Blog.find();
	console.log('getting blogs');
	console.log(blogs);
	res.render('blog', {title: 'blog', blogs});
}

exports.getPost = async (req, res) => {
	const post = await Blog.findOne({_id: req.params.id});

	res.render('blogPost', {post});
}

exports.addPost = (req, res) => {
	res.render('postBlog', {title: 'Post new blog'});
}
/*
exports.createPost = async (req, res) => {
	const post = await (new Blog(req.body)).save();
	await post.save();
	req.flash('success', `Success`);
	res.redirect(`/blog/${post.slug}`);
}*/
