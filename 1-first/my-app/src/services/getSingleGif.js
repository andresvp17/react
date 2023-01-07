import { URL_KEY } from './settings'

export default function getSingleGif({ id }){
    return fetch(`https://api.giphy.com/v1/gifs/${id}?api_key=${URL_KEY}`)
     .then(res => res.json())
     .then(res => {
         const { data } = res
         const { title, id } = data
         const { url } = data.images.downsized_medium
         return { title, id, url }
        })
}