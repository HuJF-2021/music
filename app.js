var createError = require('http-errors');
var express = require('express');
var path = require('path');
var template=require('art-template');
var dateformat=require('dateformat');
template.defaults.imports.dateformat=dateformat;
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var uploadpost=require('./routes/upload_post');
var ban=require('./routes/upload');
var deletc=require('./routes/remove');
var lastram=require('./routes/latest');
var history=require('./routes/history');
var app = express();

// view engine setup
app.engine('art', require('express-art-template'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'art');


app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', indexRouter);
app.get('/history',history);
app.use('/users', usersRouter);
app.use('/upload',uploadpost);
app.use('/ban',ban);
app.use('/delete',deletc);
app.use('/latestrandom',lastram);
require("./module/music.js");




module.exports = app;
app.listen(8000);
console.log("音乐播放器已经在8000启动");
