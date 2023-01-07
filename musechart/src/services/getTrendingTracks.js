const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'cf78f364ccmsh211d6ea8f4e235ap1b9532jsn0f0ae5e54357',
    'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
  }
}

export const getTrendingTracks = async () => {
  return await fetch('https://shazam.p.rapidapi.com/charts/track?locale=en-US&pageSize=20&startFrom=0', options)
    .then(response => response.json())
    .then(response => response.tracks)
    .catch(err => console.error(err))
}
