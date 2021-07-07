const Album = require('../models/albums')

module.exports = (app) => {
  app.get('/albums', (req, res) => {
    Album.list(res)
  })

  app.get('/albums/:id', (req, res) => {
    const id = parseInt(req.params.id)
    Album.searchById(id, res)
  })

  app.post('/albums', (req, res) => {
    const album = req.body
    Album.register(album, res)
  })

  app.patch('/albums/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const values = req.body

    Album.edit(id, values, res)
  })

  app.delete('/albums/:id', (req, res) => {
    const id = parseInt(req.params.id)
    Album.delete(id, res)
  })
}
