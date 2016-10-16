var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('使用者註冊頁面喔');
});

module.exports = router;
