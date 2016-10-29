var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Blog = new Schema({
    Username:String,
    Article:String,
    CreateDate: Date,
    Title: String

});

var Comment= new Schema({
    Visitor:String,
    Comment:String,
    MessageID: Schema.Types.ObjectId,
    CreateDate: Date
});

var Member= new Schema({
    Username:String,
    Password:String,
    Nickname:String,
    CreateDate: Date
});

  mongoose.model('Blog',Blog);
  mongoose.model('Comment',Comment);
  mongoose.model('Member',Member);
  mongoose.connect('mongodb://localhost/blog');
