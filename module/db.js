var mongoose=require('mongoose');
var huang='mongodb://localhost:27017/mymusic';
mongoose.connect(huang,{useNewUrlParser: true,useUnifiedTopology:true});
mongoose.connection.on("connected",function(){
	console.log("连接成功");
});

mongoose.connection.on("error",function(){
	console.log("连接失败");
});
mongoose.connection.on("disconnected",function(){
	console.log("连接中断");
});
module.exports=mongoose;