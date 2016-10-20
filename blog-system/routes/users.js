var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('註冊頁面');
});

/* GET users listing. */
router.get('/signup', function(req, res, next) {
  res.render('users/signup');
});

/* 登入頁面 */
router.get('/signin', function(req, res, next) {
    res.render('users/signin');
});

/* 登入頁面 */
router.get('/test', function(req, res, next) {
  res.render('users/test');
});

/* 忘記密碼 */
router.get('/forget', function(req, res, next) {
    res.render('users/forget');
});


module.exports = router;
