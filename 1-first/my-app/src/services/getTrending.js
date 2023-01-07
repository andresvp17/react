import { URL_KEY } from './settings'

export default async function getTrending(){
  const URL = `https://api.giphy.com/v1/gifs/trending?api_key=${URL_KEY}&limit=15`
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