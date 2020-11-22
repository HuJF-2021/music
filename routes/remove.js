var express = require('express');
var path=require('path');
var router = express.Router();
var music=require("../module/music.js");

var fs=require('fs');

module.exports = async (req,res)=>{
	var id=req.query.id;
	var song='';
	try{
		song=await music.findOne({_id:id}).select('filename -_id');
		await music.findOneAndDelete({_id:id});
	}catch(error){
  console.log(error.message); 
  return res.status(500).send('删除失败');
	}
	if (song) {
		fs.unlinkSync(path.join(__dirname, '../', 'public', 'music', song.filename));
	}
	return res.redirect('/');

}