var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('註冊頁面');
});

/* GET users listing. */
router.get('/resgister', function(req, res, next) {
  res.send('註冊頁面');
});

/* 登入頁面 */
router.get('/signin', function(req, res, next) {
  res.send('登入頁面');
});

/* 登入頁面 */
router.get('/test', function(req, res, next) {
  res.render('users/test');
});

module.exports = router;
