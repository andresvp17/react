import { useEffect, useState } from 'react'
import getSingleGif from '../services/getSingleGif'
import useGifs from './useGifs'

export default function useSingleGif({ id }){
    const { gifs } = useGifs()
    const gifFromCache = gifs.find(singleGif => singleGif.id === id)

    const [gif, setGif] = useState(gifFromCache)
    const [isLoading, setLoading] = useState(false)
    const [isError, setError] = useState(false)

    useEffect(() =>{
     if(!gif){
         setLoading(true)
        getSingleGif({ id })
        .then(gif =>{
            setGif(gif)
            setLoading(false)
        }).catch(err => {
            setLoading(false)
            setError(true)
        })
     }   
    }, [gif, id])

    return {gif, isLoading, isError}
}