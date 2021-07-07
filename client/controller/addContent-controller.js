import { stockService } from '../service/stock-service.js'

const form = document.querySelector('[data-form]')

form.addEventListener('submit', async (event) => {
  event.preventDefault()
  try {
    const name = event.target.querySelector('[data-name]').value
    const artist = event.target.querySelector('[data-artist]').value
    const year = event.target.querySelector('[data-year]').value
    const registrationDate = currentDate()
    const quantity = event.target.querySelector('[data-quantity]').value
    const notes = event.target.querySelector('[data-notes]').value

    await stockService.createAlbum(
      name,
      artist,
      year,
      registrationDate,
      quantity,
      notes
    )
    window.location.href = 'home.html'
  } catch (err) {
    console.log('Error creating album')
  }
})

function currentDate() {
  let d = new Date()
  let today = d.getFullYear() + '/' + (d.getMonth() + 1) + '/' + d.getDate()
  return today
}
