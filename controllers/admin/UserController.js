const UserService = require("../../services/admin/UserService")
const JWT = require('../../util/JWT')

const UserController = {

  login: async (req, res) => {
    console.log(req.body, '111')
    //req.body 
    const result = await UserService.login(req.body)

    if (result.length === 0) {
      res.send({
        success: false,
        errorMessage: "用户名密码不匹配"
      })
    } else {
      // 生成token
      const token = JWT.generate({
        _id: result[0]._id,
        username: result[0].username
      }, "1d")
      res.header("Authorization", token)
      res.send({
        success: true,
        data: {}
      })
    }
  }
}

module.exports = UserController