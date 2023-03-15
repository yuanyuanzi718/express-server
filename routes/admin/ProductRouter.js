const express = require('express')
const ProductRouter = express.Router()
const ProductController = require('../../controllers/admin/ProductController');

ProductRouter.get("/adminapi/product/list", ProductController.getList) // 列表
ProductRouter.post("/adminapi/product/create", ProductController.create) // 创建
ProductRouter.delete("/adminapi/product/list/:id", ProductController.delList) // 删除
ProductRouter.post("/adminapi/product/list/:id", ProductController.updateList) // 更新

module.exports = ProductRouter