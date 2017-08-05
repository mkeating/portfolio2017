const express = require('express');
const router = express.Router();

const projectController = require('../controllers/projectController');
const blogController = require('../controllers/blogController');
const userController = require('../controllers/userController');
const authController = require('../controllers/authController');


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
router.get('/add-post', authController.isLoggedIn, blogController.addPost);
router.post('/add-post', catchErrors(blogController.createPost));

/* adding project */
router.get('/add-project', authController.isLoggedIn, projectController.addProject);
router.post('/add-project', catchErrors(projectController.createProject));

/* User stuff */
router.get('/login', userController.loginForm);
router.post('/login', authController.login);


router.get('/register', userController.registerForm);

router.post('/register', 
	userController.validateRegister,
	userController.register,
	authController.login
	);

router.get('/logout', authController.logout);

/* GET individual projects */
router.get('/:slug', catchErrors(projectController.getProject));


/* TODO: routes for editing posts */




module.exports = router;
