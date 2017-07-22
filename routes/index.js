const express = require('express');
const router = express.Router();

const projectController = require('../controllers/projectController');
const blogController = require('../controllers/blogController');

const { catchErrors } = require('../handlers/errorHandlers');

/* GET home/projects */
router.get('/', catchErrors(projectController.getProjects));
//router.get('/', catchErrors(projectController.getProjects));

/* GET blog */
router.get('/blog', catchErrors(blogController.getBlogs));

router.get('/blog/:slug', catchErrors(blogController.getPost));

/* GET me  */
router.get('/me', (req, res, next) => {
	res.render('me', { title: 'me' });
});

/* adding blog post */
router.get('/add-post', catchErrors(blogController.addPost));

router.post('/add-post', 
	catchErrors(blogController.createPost)
);

/* adding project */
router.get('/add-project', catchErrors(projectController.addProject));

/* GET individual projects */
router.get('/:slug', catchErrors(projectController.getProject));


/* TODO: routes for editing posts */


module.exports = router;
