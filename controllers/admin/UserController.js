const UserService = require("../../services/admin/UserService")
const JWT = require('../../util/JWT')

const UserController = {

  login: async (req, res) => {
    const result = await UserService.login(req.body)
    if (result.length === 0) {
      res.send({ success: false, errorMessage: "用户名密码不匹配" })
    } else {
      // 生成token
      const token = JWT.generate({
        _id: result[0]._id,
        username: result[0].username
      }, "1d")
      res.header("Authorization", token)
      res.send({
        success: true,
        data: {
          username: result[0].username,
          gender: result[0].gender ? result[0].gender : 0,
          introduction: result[0].introduction,
          avatar: result[0].avatar,
          role: result[0].role,
        }
      })
    }
  },

  upload: async (req, res) => {
    const { username, introduction, gender, avatar } = req.body
    const token = req.headers["authorization"].split(" ")[1]
    var payload = JWT.verify(token)
    //调用service 模块更新 数据
    await UserService.upload({ _id: payload._id, username, introduction, gender, avatar })
    res.send({
      success: true,
      data: {}
    })
  },

  getList: async (req, res) => {
    const result = await UserService.getList()
    res.send({
      success: true,
      data: {
        list: result
      }
    })
  },

  create: async (req, res) => {
    const { username, introduction, gender, role, password, avatar } = req.body
    await UserService.create({ username, introduction, gender, avatar, role, password })
    res.send({
      success: true,
      data: {}
    })
  },

  detail: async (req, res) => {
    const result = await UserService.detail(req.params)
    console.log(result, 'result11');
    res.send({
      success: true,
      data: result[0]
    })
  },

  putList: async (req, res) => {
    console.log(req.body, 'body');
    const result = await UserService.putList(req.body)
    res.send({
      success: true,
      data: {}
    })
  },

  delList: async (req, res) => {
    console.log(req.params.id)
    const result = await UserService.delList({ _id: req.params.id })
    res.send({
      success: true,
      data: {}
    })
  }
}

module.exports = UserController