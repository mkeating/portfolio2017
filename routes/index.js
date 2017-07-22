const express = require('express');
const router = express.Router();

const projectController = require('../controllers/projectController');
const blogController = require('../controllers/blogController');

const { catchErrors } = require('../handlers/errorHandlers');

/* GET home */
router.get('/', catchErrors(projectController.getProjects));

/* GET blog */
router.get('/blog', catchErrors(blogController.getBlogs));

router.get('/blog/:id', catchErrors(blogController.getPost));

/* GET me  */
router.get('/me', (req, res, next) => {
	res.render('me', { title: 'me' });
});

/* adding blog post */
router.get('/addPost', catchErrors(blogController.addPost));

router.post('/addPost', 
	catchErrors(blogController.createPost)
);

/* TODO: routes for editing posts */


module.exports = router;
