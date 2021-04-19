// Dependencies
const fs = require('fs')
const path = require('path')
const Sequelize = require('sequelize')
const config = require('../config/config')
// Container
const db = {}
// Create sequelize ORM
const sequelize = new Sequelize(
  config.db.databse,
  config.db.user,
  config.db.password,
  config.db.options
)

fs
  .readdirSync(__dirname)
  .filter((file) =>
    file !== 'index.js'
  ).forEach((file) => {
    console.log(path.join(__dirname, file))
    const model = require(path.join(__dirname, file))(sequelize, Sequelize)
    db[model.name] = model
  })

  // Associations 
Object.keys(db).forEach(function(modelName){
  if('associate' in db[modelName]){
    db[modelName].associate(db)
  }
})
db.sequelize = sequelize
db.Sequelize = Sequelize
// Export container
module.exports = db
