const UserModel = require("../../models/UserModel")

const UserService = {
  login: async ({ username, password }) => {
    return UserModel.find({
      username,
      password
    })
  },

  upload: async ({ _id, username, introduction, gender, avatar }) => {
    return UserModel.updateOne({
      _id
    }, {
      username, introduction, gender, avatar
    })
  },

  getList: async () => {
    return UserModel.find({}, ["username", "role", "avatar", "introduction", "gender"])
  },

  create: async ({ username, introduction, gender, avatar, password, role }) => {
    return UserModel.create({
      username, introduction, gender, avatar, password, role
    })
  },

  detail: async ({ id }) => {
    return UserModel.find({ _id: id }, ["username", "password", "role", "gender", "introduction", "avatar"])
  },

  putList: async (body) => {
    return UserModel.updateOne({ _id: body._id }, body)
  },

  delList: async ({ _id }) => {
    return UserModel.deleteOne({ _id })
  }
}

module.exports = UserService