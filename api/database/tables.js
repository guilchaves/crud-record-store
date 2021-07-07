class Tables {
  init(db) {
    this.db = db
    this.createAlbums()
  }

  createAlbums() {
    const sql =
      'CREATE TABLE IF NOT EXISTS albums (id int NOT NULL AUTO_INCREMENT, name varchar(255) NOT NULL, artist varchar(50), releaseDate year NOT NULL, registrationDate datetime NOT NULL, quantity int NOT NULL, notes text, PRIMARY KEY(id))'

    this.db.query(sql, (err) => {
      err ? console.log(err) : console.log('Albums table created!')
    })
  }
}

module.exports = new Tables()
