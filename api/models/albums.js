const { query } = require('../database/db')
const db = require('../database/db')

class Album {
  register(album, res) {
    const sql = 'INSERT INTO albums SET ?'

    db.query(sql, album, (err, results) => {
      err ? res.status(400).json(err) : res.status(201).json(album)
    })
  }

  list(res) {
    const sql = 'SELECT * FROM albums'

    db.query(sql, (err, results) => {
      err ? res.status(400).json(err) : res.status(201).json(results)
    })
  }

  searchById(id, res) {
    const sql = `SELECT * FROM albums WHERE id=${id}`

    db.query(sql, (err, results) => {
      const albums = results[0]
      err ? res.status(400).json(err) : res.status(201).json(albums)
    })
  }

  edit(id, values, res) {
    const sql = 'UPDATE albums SET ? WHERE id=?'

    db.query(sql, [values, id], (err, results) => {
      err ? res.status(400).json(err) : res.status(200).json(results)
    })
  }

  delete(id, res) {
    const sql = 'DELETE FROM albums WHERE id=?'

    db.query(sql, id, (err, results) => {
      err ? res.status(400).json(err) : res.status(201).json(results)
    })
  }
}
module.exports = new Album()
