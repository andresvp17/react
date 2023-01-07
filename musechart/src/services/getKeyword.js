export const getKeyword = async ({ keyword } = {}) => {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'cf78f364ccmsh211d6ea8f4e235ap1b9532jsn0f0ae5e54357',
      'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
    }
  }

  return await fetch(`https://shazam.p.rapidapi.com/search?term=${keyword}&locale=en-US&offset=0&limit=5`, options)
    .then(response => response.json())
    .then(response => response.tracks.hits)
    .catch(err => console.error(err))
}
