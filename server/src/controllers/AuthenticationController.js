const { User } = require('../models')
const jwt = require('jsonwebtoken')
const config = require('../config/config')

// Helper function for token
function jwtSignUser(user){
  const ONE_DAY = 60*60*24;
  return jwt.sign(user, config.authentication.jwtSecret,{
    expiresIn : ONE_DAY
  })
}
module.exports = {
  async register (req, res) {
    try {
      const user = await User.create(req.body)
      delete user.password
      const userJson = user.toJSON()
      delete userJson.password
      res.send({
        user: userJson,
        token: jwtSignUser(userJson)
      })
    } catch (err) {
      res.status(400).send({
        error: 'This email account is already in use'
      })
    }
  },
  async login (req, res) {
    try {
      const {email, password} = req.body
      const user = await User.findOne({
        where : {
          email: email
        }
      })
      if(!user){
        return res.status(403).send({
          error:  'The login information was incorrect'
        })
      }
      const isPasswordValid = user.comparePassword(password)
      if(!isPasswordValid){
        return res.status(403).send({
          error:  'The login information was incorrect'
        })
      }
      
      const userJson = user.toJSON()
      delete userJson.password
      res.send({
        user :userJson
        ,token: jwtSignUser(userJson)
      })
    } catch (err) {
      console.log("Error:", err),
      res.status(500).send({
        error: 'An error occured while trying to log in'
      })
    }
  }
}
