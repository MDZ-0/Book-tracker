

// Export Bookmark model
module.exports = (sequelize, DataTypes) =>{
    const Bookmark = sequelize.define('Bookmark', {})
    
    Bookmark.associate = function(models){
        Bookmark.belongsTo(models.User)
        Bookmark.belongsTo(models.Book)
    }

    return Bookmark 
  }
    