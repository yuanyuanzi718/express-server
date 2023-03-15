const ProductModel = require("../../models/ProductModel")

const ProductService = {

  getList: async () => {
    return ProductModel.find({})
  },

  create: async ({ title, introduction, detail, cover, editTime }) => {
    return ProductModel.create({
      title, introduction, detail, cover, editTime
    })
  },

  delList: async ({ _id }) => {
    return ProductModel.deleteOne({
      _id
    })
  },

  updateList: async ({ title, introduction, detail, cover, _id, editTime }) => {
    return ProductModel.updateOne({ _id }, {
      title, introduction, detail, cover, _id
    })
  },
}

module.exports = ProductService