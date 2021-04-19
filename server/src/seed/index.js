const {
    sequelize,
    Book,
    User,
    Bookmark
} = require('../models')

const Promise = require('bluebird')
const books = require('./books.json')
const users = require('./users.json')
const bookmarks = require('./bookmarks.json')

sequelize.sync({force : true}).
then(async function() {

    await Promise.all(
        users.map(user => {
            User.create(user)
        })
    )

    await Promise.all(
        books.map(book => {
            Book.create(book)
        })
    )

    await Promise.all(
        bookmarks.map(bookmark => {
            Bookmark.create(bookmark)
        })
    )
  })
  