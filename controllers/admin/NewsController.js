const NewsService = require("../../services/admin/NewsService")

const NewsController = {
  getList: async (req, res) => {
    const result = await NewsService.getList()
    res.send({
      success: true,
      data: {
        list: result
      }
    })
  },
  create: async (req, res) => {
    const { title, content, category, isPublish, cover } = req.body
    await NewsService.create({
      title,
      content,
      category: category,
      isPublish: isPublish,
      cover,
      editTime: new Date()
    })
    res.send({
      success: true,
      data: {}
    })
  },
  publish: async (req, res) => {
    await NewsService.publish({
      ...req.body,
      editTime: new Date()
    })
    res.send({
      success: true,
      data: {}
    })
  },
  delList: async (req, res) => {
    await NewsService.delList({ _id: req.params.id })
    res.send({
      success: true,
      data: {}
    })
  },
  updateList: async (req, res) => {
    const { title, content, category, isPublish, _id, cover } = req.body
    await NewsService.updateList({
      _id,
      title, content,
      category: category,
      isPublish: isPublish,
      cover,
      editTime: new Date()
    })
    res.send({
      success: true,
      data: {}
    })
  },
}

module.exports = NewsController