const getContent = async () => {
  try {
    const response = await fetch('http://localhost:3000/albums', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const data = await response.json()
    return data
  } catch (err) {
    console.log('Failed to load content')
  }
}

const createAlbum = async (
  name,
  artist,
  releaseYear,
  registrationDate,
  quantity,
  notes
) => {
  try {
    const response = await fetch(`http://localhost:3000/albums`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name,
        artist: artist,
        releaseDate: releaseYear,
        registrationDate: registrationDate,
        quantity: quantity,
        notes: notes,
      }),
    })
    const data = await response.json()
    return data
  } catch (err) {
    console.log('Failed to create new album')
  }
}

const removeAlbum = async (id) => {
  try {
    const response = await fetch(`http://localhost:3000/albums/${id}`, {
      method: 'DELETE',
    })
    const data = await response.json()
    return data
  } catch (err) {
    console.log('Failed to delete')
  }
}

const describeAlbum = (id) => {
  return fetch(`http://localhost:3000/albums/${id}`).then((resposta) => {
    if (resposta.ok) {
      return resposta.json()
    }
    throw new Error('Failed to load album information')
  })
}

const updateAlbum = async (id, name, artist, releaseYear, quantity, notes) => {
  try {
    fetch(`http://localhost:3000/albums/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: id,
        name: name,
        artist: artist,
        releaseDate: releaseYear,
        quantity: quantity,
        notes: notes,
      }),
    })
    const data = await response.json()
    return data
  } catch (err) {
    console.log('Failed to update Album')
  }
}

export const stockService = {
  getContent,
  createAlbum,
  removeAlbum,
  describeAlbum,
  updateAlbum,
}
