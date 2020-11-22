var mongoose=require("./db.js");

var UserSchem=new mongoose.Schema({
singer:{type:String,required:true},
songname:{type:String,required:true},
filename:{type:String,required:true},
isshow:{
	type:String,
	enum:['0','1'],
	default: '1'
},
addtime:{
	type:Date,
	default:Date.now
}

});
//建立实体类与数据库的关联
UserSchem.set("collection","music");
var Student=mongoose.model("music",UserSchem);
module.exports=Student;