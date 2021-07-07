const express = require('express')
const consign = require('consign')

module.exports = () => {
  const app = express()

  app.use(express.urlencoded({ extended: false }))
  app.use(express.json())

  //allow methods for API consumption
  app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
    )
    res.header(
      'Access-Control-Allow-Methods',
      'POST, GET, PUT, DELETE, OPTIONS, PATCH'
    )
    next()
  })

  consign().include('controllers').into(app)
  return app
}
