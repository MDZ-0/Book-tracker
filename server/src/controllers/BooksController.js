const { Book } = require('../models')
const {Op} = require('sequelize')

module.exports = {
  async index (req, res) {
    try {
      let books = null
      const search = req.query.search
      console.log('this is search ',search)
      if(search){
        books = await Book.findAll({
          where: {
            [Op.or]: [
              'title', 'author', 'genre', 'year'
            ].map(key => ({
              [key]: {
                [Op.like]: `%${search}%`
              }
            }))
          }
        })
      } else {
        books = await Book.findAll({
          limit : 20
        })
      }
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
  },
  async put (req, res) {
    try {
      const book = await Book.update(req.body,{
        where :{
          id: req.params.bookId
        }
      })
      res.send(req.body)
    } catch (err) {
      console.log("Error:", err),
      res.status(500).send({
        error: 'An error occured while trying to create a book'
      })
    }
  },

}
