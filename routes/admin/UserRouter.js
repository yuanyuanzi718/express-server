const express = require('express')
const UserRouter = express.Router()
const UserController = require('../../controllers/admin/UserController');

//图片上传
// const multer = require('multer')
// const upload = multer({ dest: 'public/avataruploads/' })

UserRouter.post("/adminapi/user/login", UserController.login)
UserRouter.post("/adminapi/user/upload", UserController.upload)
// UserRouter.post("/adminapi/user/upload", upload.single('file'), UserController.upload)

module.exports = UserRouter;