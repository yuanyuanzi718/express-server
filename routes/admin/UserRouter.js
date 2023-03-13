const express = require('express')
const UserRouter = express.Router()
const UserController = require('../../controllers/admin/UserController');

//图片上传
// const multer = require('multer')
// const upload = multer({ dest: 'public/avataruploads/' })

UserRouter.post("/adminapi/user/login", UserController.login)
UserRouter.post("/adminapi/user/upload", UserController.upload)

UserRouter.get("/adminapi/user/list", UserController.getList)
UserRouter.post("/adminapi/user/create", UserController.create)
UserRouter.get("/adminapi/user/detail/:id", UserController.detail)
UserRouter.put("/adminapi/user/list/:id", UserController.putList)
UserRouter.delete("/adminapi/user/list/:id", UserController.delList)

module.exports = UserRouter;