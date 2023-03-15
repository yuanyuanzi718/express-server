const ProductService = require("../../services/admin/ProductService")

const ProductController = {

  getList: async (req, res) => {
    const result = await ProductService.getList()
    res.send({
      success: true,
      data: {
        list: result
      }
    })
  },

  create: async (req, res) => {
    const { title, introduction, detail, cover } = req.body
    await ProductService.create({
      title,
      introduction,
      detail,
      cover,
      editTime: new Date()
    })
    res.send({
      success: true,
      data: {}
    })
  },

  delList: async (req, res) => {
    await ProductService.delList({ _id: req.params.id })
    res.send({
      success: true,
      data: {}
    })
  },

  updateList: async (req, res) => {
    const { title, introduction, detail, cover, _id } = req.body
    await ProductService.updateList({
      _id,
      title,
      introduction,
      detail,
      cover,
      editTime: new Date()
    })
    res.send({
      success: true,
      data: {}
    })
  },
}

module.exports = ProductController