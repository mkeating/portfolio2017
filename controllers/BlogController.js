const mongoose = require('mongoose');
const Blog = mongoose.model('Blog');

exports.getBlogs = async (req, res) => {
	
	const blogs = await Blog.find();
	console.log('getting blogs');
	console.log(blogs);
	res.render('blog', {title: 'blog', blogs});
}