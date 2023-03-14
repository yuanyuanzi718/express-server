const express = require('express')
const NewsRouter = express.Router()
const NewsController = require('../../controllers/admin/NewsController');

NewsRouter.post("/adminapi/news/create", NewsController.create)
NewsRouter.get("/adminapi/news/list", NewsController.getList)
NewsRouter.post("/adminapi/news/publish", NewsController.publish)
NewsRouter.delete("/adminapi/news/list/:id", NewsController.delList)
NewsRouter.post("/adminapi/news/list/:id", NewsController.updateList)

module.exports = NewsRouter