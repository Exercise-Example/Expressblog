
require('../lib/db');
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Blog = mongoose.model('Blog');
var moment = require('moment');

/* GET home page. */
router.get('/home', function(req, res, next) {
    res.locals.username = req.session.name ;
    res.locals.authenticated = req.session.logined;
    Blog.find( function ( err, blogs, count ){
        res.render( 'home.ejs', {
            title : 'Blog System',
            blogs: blogs
        });
    });
});

router.get('/', function(req, res, next) {
    res.locals.username = req.session.name ;
    res.locals.authenticated = req.session.logined;
    Blog.find( function ( err, blogs, count ){
        res.render( 'index.ejs', {
            title : 'Blog System',
            blogs: blogs
        });
    });
});

module.exports = router;
