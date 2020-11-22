var express = require('express');
var path=require('path');
var router = express.Router();
var mongooseradm=require('mongoose-query-random');
var music=require("../module/music.js");

function shuffle(arr){
	var len = arr.length;
	console.log(arr.length);
	for(var i=0;i<len-1;i++){
    var index = parseInt(Math.random() * (len - i));
    var temp = arr[index];
    arr[index] = arr[len - i - 1]; 
    arr[len - i - 1] = temp;

	}
	return arr;
}
module.exports = async (req, res) => {
    // 获取最新的十条数据
    var sounds = await music.find({isshow:'1'}).sort('-addtime').limit(3);
    return res.render('index', {result:shuffle(sounds)});
}


// router.get('/',function(req,res){
// var sound=music.find({isshow:'1'}).sort('-addtime').limit(10);
//   return res.render('index',{result:shuffle(sound)});
// });
// module.exports = router;