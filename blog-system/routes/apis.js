require('../lib/db');
var express = require('express');
var router = express.Router();
var mongoose=require('mongoose');
var Blog =mongoose.model('Blog');
var Comment =mongoose.model('Comment');
var Member =mongoose.model('Member');
var dateFormat = require('dateformat');
var now = new Date();


/* 使用者刪除文章功能. */
router.get('/delete/:id', function(req, res, next) {
    Blog.remove({ _id: req.params.id }, function(err) {
        if (err)
            console.log('Fail to delete article.');
        else
            console.log('Done');
    });
    res.redirect('/users/profile');
});

/* 使用者登入會員功能. */
router.post('/login', function(req, res, next) {
    if ((!req.body.user) || (!req.body.passwd)) {
        res.redirect('/users/register.jade');
        return;
    }

   var query_doc = { Username:req.body.user,Password:req.body.passwd};
      Member.count(query_doc, function(err, doc){
       if(doc == 1){//验证成功,转到 欢迎页面


          req.session.name = req.body.user;
          req.session.passwd = req.body.passwd;
          req.session.logined = true;

           console.log('登入成功');
           console.log(req.params.Nickname);
    Member.findOne({Username:req.body.user}, function(err,obj) { console.log(obj); });

            res.redirect('/');

       }else{
           res.redirect('users/register');
           console.log('帳密錯誤');
       }
     });
});
/* 使用者新增文章功能. */
router.post('/add', function(req, res, next) {
    if (!req.session.name) {
        res.redirect('/');
        return;
    }
    new Blog({
        Username: req.session.name,
        Article: req.body.Content,
        CreateDate: Date.now("dddd, mmmm dS, yyyy")

    }).save( function( err ){
        if (err) {
            console.log('Fail to save to DB.');
            return;
        }
        console.log('Save to DB.');
    });
    res.redirect('/');
});

/* 使用者更新文章功能. */
router.post('/update/:id', function(req, res, next) {
    if (!req.params.id) {
        res.redirect('/');
        return;
    }
    Blog.update({ _id: req.params.id }, { Article: req.body.Content }, function(err) {
        if (err)
            console.log('Fail to update article.');
        else
            console.log('Done');
    });
    res.redirect('/users/profile');
});

/* 文章留言功能. */
router.post('/comment/:id', function(req, res, next) {
    if (!req.params.id) {
        res.redirect('/');
        return;
    }
    new Comment({
        Visitor: req.body.Visitor,
        Comment: req.body.Comment,
        MessageID: req.params.id,
        CreateDate: Date.now()
    }).save( function( err ){
        if (err) {
            console.log('Fail to save to DB.');
            return;
        }
        console.log('Save to DB.');
    });
    res.redirect('/users/message/'+req.params.id);
});

/* 使用者註冊頁面. */
router.post('/signup', function(req, res, next) {

    new Member({
        Username: req.body.user,
        Password: req.body.passwd,
        Nickname: req.body.nick,
        CreateDate: Date.now("dddd, mmmm dS, yyyy")
    }).save( function( err ){
        if (err) {
            console.log('Fail to save to DB.');
            return;
        }
        console.log('Save to DB.');
    });
    res.redirect('/');
});
module.exports = router;
