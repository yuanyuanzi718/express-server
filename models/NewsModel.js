const mongoose = require('mongoose')
const Schema = mongoose.Schema

const NewsType = {
  title: String,
  content: String,
  category: Number, //性别 1,2,3
  cover: Object, // 封面
  isPublish: Number, // 是否发布
  editTime: Date // 编辑时间
}

const NewsModel = mongoose.model("news", new Schema(NewsType))

module.exports = NewsModel