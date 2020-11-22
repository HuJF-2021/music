var express = require('express');
var router = express.Router();
module.exports = async (req, res)=>{ // 展示音乐上传模板 
	res.render('upload'); 
}

