const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserType = {
  username: String,
  password: String,
  gender: Number, //性别 1男,2女,3未知
  introduction: String,//简介
  avatar: Object, // 头像
  role: Number //管理员1 ,编辑员2
}

const UserModel = mongoose.model("user", new Schema(UserType))

module.exports = UserModel