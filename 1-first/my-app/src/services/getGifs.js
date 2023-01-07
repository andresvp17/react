const URL_KEY = 'mynOxYZBY9Bk6ZJvqkkvPm6fdRR9uVs1'

export default async function getGifs({ 
  keyword = 'naruto',
  limit = 15,
  page = 0
  } = {}){
  const URL = `https://api.giphy.com/v1/gifs/search?api_key=${URL_KEY}&q=${keyword}&limit=${limit}&offset=${page * limit}&rating=g&lang=en`
    return fetch(URL)
      .then(res => res.json())
      .then(res => {
        const { data } = res
        const gifs = data.map(image =>{
          const { url } = image.images.downsized_medium
          const { title, id } = image
          return {url, title, id}
        })
        return gifs
      })  
} 