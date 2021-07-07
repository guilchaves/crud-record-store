import { stockService } from '../service/stock-service.js'
;(async () => {
  const getURL = new URL(window.location)

  const id = getURL.searchParams.get('id')

  const inputName = document.querySelector('[data-name]')
  const inputArtist = document.querySelector('[data-artist]')
  const inputYear = document.querySelector('[data-year]')
  const inputQuantity = document.querySelector('[data-quantity]')
  const inputNotes = document.querySelector('[data-notes]')

  try {
    const data = await stockService.describeAlbum(id)
    inputName.value = data.name
    inputArtist.value = data.artist
    inputYear.value = data.releaseDate
    inputQuantity.value = data.quantity
    inputNotes.value = data.notes
  } catch (err) {
    console.log(err)
  }

  const form = document.querySelector('[data-form]')

  form.addEventListener('submit', async (event) => {
    event.preventDefault()
    try {
      await stockService.updateAlbum(
        id,
        inputName.value,
        inputArtist.value,
        inputYear.value,
        inputQuantity.value,
        inputNotes.value
      )
      window.location.href = '../views/home.html'
    } catch (err) {
      console.log('Failed to update album')
    }
  })
})()
