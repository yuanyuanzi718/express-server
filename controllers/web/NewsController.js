const NewsService = require("../../services/web/NewsService")

const NewsController = {
  getList: async (req, res) => {
    const result = await NewsService.getList({ _id: req.params.id })
    res.send({
      success: true,
      data: {
        list: result
      }
    })
  },

}

module.exports = NewsController