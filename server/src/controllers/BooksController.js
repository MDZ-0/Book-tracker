const { Book } = require('../models')

module.exports = {
  async index (req, res) {
    try {
      const books = await Book.findAll({
        limit : 20
      })
      res.send(books)
    } catch (err) {
      console.log("Error:", err),
      res.status(500).send({
        error: 'An error occured while trying to get all books'
      })
    }
  },
  async show (req, res) {
    try {
      const book = await Book.findByPk(req.params.bookId)
      res.send(book)
    } catch (err) {
      console.log("Error:", err),
      res.status(500).send({
        error: 'An error occured while trying to get the book'
      })
    }
  },
  async post (req, res) {
    try {
      const book = await Book.create(req.body)
      res.send(book)
    } catch (err) {
      console.log("Error:", err),
      res.status(500).send({
        error: 'An error occured while trying to create a book'
      })
    }
  }
}
