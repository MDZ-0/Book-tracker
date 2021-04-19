const { Bookmark } = require('../models')


module.exports = {
  async index (req, res) {
    try {
      const {bookId, userId} = req.query

      const bookmark = await Bookmark.findOne({
        where : {
          BookId : bookId,
          UserId : userId
        }
      })

      res.send(bookmark)
    } catch (err) {
      console.log("Error:", err),
      res.status(500).send({
        error: 'An error occured while trying to get a certain bookmark'
      })
    }
  }
}
