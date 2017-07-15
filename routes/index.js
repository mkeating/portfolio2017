const express = require('express');
const router = express.Router();

const projectController = require('../controllers/projectController');
const blogController = require('../controllers/blogController');

const { catchErrors } = require('../handlers/errorHandlers');

/* GET home */
router.get('/', projectController.getProjects);

/* GET blog */
router.get('/blog', blogController.getBlogs);

/* GET me  */
router.get('/me', (req, res, next) => {
	res.render('me', { title: 'me' });
});

/* adding blog post */
//router.get('/blog/addPost', blogController.addPost);
/*router.post('/addPost', 
	blogController.upload, 
	catchErrors(blogController.createPost)
);*/

/* TODO: routes for editing posts */


module.exports = router;
