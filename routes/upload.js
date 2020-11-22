var music=require("../module/music.js");
var express = require('express');
var router = express.Router();
router.get('/',function(req,res){
music.findOneAndUpdate({_id:req.query.id},{isshow:req.query.statues,addtime:new Date()},function(err,result){
if (err) {
	res.json(err);
}else{
	res.send({isshow:req.query.statues});
}
})
});
module.exports = router;