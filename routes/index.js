var express = require('express');
var router = express.Router();

/* GET home */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'mkeat' });
});

/* GET blog */
router.get('/blog', (req, res, next) => {
	res.render('blog', { title: 'blog' });
});

/* GET me  */
router.get('/me', (req, res, next) => {
	res.render('me', { title: 'me' });
});

module.exports = router;
