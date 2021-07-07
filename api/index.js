const customExpress = require('./config/customExpress')
const db = require('./database/db')
const Tables = require('./database/tables')

db.connect((err) => {
  err ? console.log(err) : runServer()

  function runServer() {
    console.log('db connected')
    Tables.init(db)
    const app = customExpress()
    const port = 3000

    app.listen(port, (req, res) => {
      console.log(`Server up and running at port ${port}`)
    })
  }
})
