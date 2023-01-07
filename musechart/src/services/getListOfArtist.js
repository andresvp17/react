export const getListOfArtist = () => {
  const ARTIST = ['taylor%20swift', 'dua%20lipa', 'beyonce', 'bad%20bunny', 'queen']
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '2f5b278f55msh739f36ea2fb6afep14d11ajsn2250019326e8',
      'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
    }
  }

  const ARTIST_TO_USE = ARTIST.map(async artist => {
    return await fetch(`https://shazam.p.rapidapi.com/search?term=${artist}&locale=en-US&offset=0&limit=5`, options)
      .then(response => response.json())
      .then(response => {
        const { tracks, artists } = response
        return { tracks, artists }
      })
      .catch(err => console.error(err))
  })

  return ARTIST_TO_USE
}
