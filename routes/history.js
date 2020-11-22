var music=require("../module/music.js");
module.exports = async (req, res) => {
    // 获取最新的十条数据
    var sounds = await music.find({isshow:'0'}).sort('-addtime');
   res.render('index', {result:sounds});
}