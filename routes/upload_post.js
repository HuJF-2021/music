var  formidable=require('formidable');
var express = require('express');
var router = express.Router();
var fs=require('fs');
var path=require('path');
var dateformat=require('dateformat');
var music=require("../module/music.js");
router.post('/', function(req, res, next) {
 var form=new formidable.IncomingForm();
 form.uploadDir=path.join(__dirname, '../', 'public', 'music');
 form.keepExtensions = true; 
 form.maxFileSize = 20 * 1024 * 1024;
 form.parse(req, async(err, fields, files) =>{
 	console.log(fields);
 	console.log(files);
 	var newname=dateformat(new Date(),'yyyymmddhhMMss');
 	var salt=parseInt(Math.random()*89999+10000);
 	var extname=path.extname(files.source.name);
 	var oldpath=path.normalize(files.source.path);
 	var newfile=newname+salt+extname;
 	var newpath=path.join(__dirname,'../','public','music',newfile);
  try{
  fs.renameSync(oldpath,newpath);
  }catch(error){
  	console.log("改名失败");
  	fs.unlinkSync(oldpath);
  	return res.redirect('/upload');
  }
  await music.create({
  	singer:fields.singer,
  	songname:fields.songname,
  	filename:newfile
  });
  return res.redirect('/');
 })
});



module.exports=router;