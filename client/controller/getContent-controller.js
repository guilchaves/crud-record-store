import { stockService } from '../service/stock-service.js'

const createNewRow = (id, artist, name, releaseDate, quantity) => {
  const rowNewAlbum = document.createElement('tr')
  const content = `      
          <tr>
            <th scope="row">${id}</th>
            <td>${artist}</td>
            <td>${name}</td>
            <td>${releaseDate}</td>
            <td>${quantity}</td> 
            <td><button type="button" class="btn btn-delete">delete</button> <a href="../../client/views/update.html?id=${id}" type="button" class="btn btn-update">update</a></td>
          </tr>
      `

  rowNewAlbum.innerHTML = content
  rowNewAlbum.dataset.id = id
  return rowNewAlbum
}

const table = document.querySelector('[data-table]')

table.addEventListener('click', async (event) => {
  let isDeleteBtn = event.target.className === 'btn btn-delete'
  if (isDeleteBtn) {
    try {
      const rowAlbum = event.target.closest('[data-id]')
      let id = rowAlbum.dataset.id
      await stockService.removeAlbum(id)
      rowAlbum.remove()
    } catch (err) {
      console.log(err)
    }
  }
})

const render = async () => {
  try {
    const getStock = await stockService.getContent()
    getStock.forEach((element) => {
      table.appendChild(
        createNewRow(
          element.id,
          element.artist,
          element.name,
          element.releaseDate,
          element.quantity
        )
      )
    })
  } catch (err) {
    console.log(err)
  }
}

render()
