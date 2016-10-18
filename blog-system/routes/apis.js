var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/apis', function(req, res, next) {
  res.send('註冊頁面');
});


/* 刪除文章 */
router.get('/delete/:id', function(req, res, next) {
  res.send('要刪除了喔~~');
});

/* GET users listing. */
router.get('/login', function(req, res, next) {
  res.send('登入頁面');
});

router.post('/test', function(req, res, next) {
  res.redirect('/test');
});


module.exports = router;
