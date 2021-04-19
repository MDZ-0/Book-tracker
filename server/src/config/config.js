const path = require('path')

// Container

const config = {
  port: process.env.PORT || 8081,
  db: {
    database: process.env.DB_NAME || 'book_tracker',
    user: process.env.DB_USER || 'book_tracker',
    password: process.env.DB_PASS || 'book_tracker',
    options: {
      dialect: process.env.DIALECT || 'sqlite',
      host: process.env.HOST || 'localhost',
      storage: path.resolve(__dirname,'../../book_tracker.sqlite')
    }
  },
  authentication:{
    jwtSecret : process.env.JWT_SECRET || 'secret'
  }
}

// Export container of config params
module.exports = config
