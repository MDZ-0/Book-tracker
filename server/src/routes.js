const AuthenticationController = require('./controllers/AuthenticationController')
const BooksController = require('./controllers/BooksController')
const BookmarksController = require('./controllers/BookmarksController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')

module.exports = (app) => {
  app.post('/register',
    AuthenticationControllerPolicy.register,
    AuthenticationController.register),

  app.post('/login',
    AuthenticationController.login)

  app.get('/books',
    BooksController.index)
  
  app.post('/books',
    BooksController.post)
  
  app.get('/books/:bookId',
    BooksController.show)

  app.put('/books/:bookId',
    BooksController.put)

  app.get('/bookmarks',
    BookmarksController.index)
}
