var express = require('express');
var router = express.Router();
var music=require("../module/music.js");
var mongooseradm=require('mongoose-query-random');

/* GET home page. */
module.exports =  async (req,res,next)=>{
	var count=await music.countDocuments({isshow:'1'});
	if (count>0) {

   music.find({isshow:'1'}).random(10,true,function(err,result){
  res.render('index',{result});
	})
}else{
	 res.render('index',{result:''});
}
}

