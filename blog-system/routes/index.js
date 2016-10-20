var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Blog System' });
});

router.get('/home', function(req, res, next) {
  res.render('home', { title: 'Blog System' });
});
module.exports = router;
