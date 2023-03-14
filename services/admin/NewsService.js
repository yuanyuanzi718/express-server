const NewsModel = require("../../models/NewsModel")

const NewsService = {
  getList: async () => {
    return NewsModel.find({})
  },
  create: async ({ title, content, category, cover, isPublish, editTime }) => {
    return NewsModel.create({
      title, content, category, cover, isPublish, editTime
    })
  },
  publish: async ({ _id, isPublish, editTime }) => {
    return NewsModel.updateOne({
      _id
    }, {
      isPublish,
      editTime
    })
  },
  delList: async ({ _id }) => {
    return NewsModel.deleteOne({
      _id
    })
  },
  updateList: async ({ _id, title, content, category, isPublish, cover, editTime }) => {
    if (cover) {
      return NewsModel.updateOne({ _id }, {
        title, content, category, isPublish, cover, editTime
      })
    } else {
      return NewsModel.updateOne({ _id }, {
        title, content, category, isPublish, editTime
      })
    }
  },
}

module.exports = NewsService