// Dependencies

// Export book model
module.exports = (sequelize, DataTypes) =>{
  const Book = sequelize.define('Book', {
    title : DataTypes.STRING,
    author: DataTypes.STRING,
    genre : DataTypes.STRING,
    year : DataTypes.INTEGER,
    coverImageUrl : DataTypes.STRING,
    youtubeId : DataTypes.STRING,
    backCover : DataTypes.STRING,
    afterWord : DataTypes.TEXT
  })

  return Book 
}
  

