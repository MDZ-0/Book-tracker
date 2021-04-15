// Dependencies
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const config = require('./config/config')
const {sequelize} = require('./models')
const port = process.env.PORT || 8081

// App container
const app = express()
app.use(cors())
app.options('*', cors())
app.use(bodyParser.json())
app.use(morgan('combined'))

app.get('/', (req, res) => {
  res.send({
    message: 'Hello world!'
  })
})

app.post('/register', (req, res) => {
  res.send({
    message: `User ${req.body.email} registered with success!`
  })
})

sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${config.port}...`)
  })
})

