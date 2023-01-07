import { useEffect, useState, useContext } from 'react'
import getGifs from '../services/getGifs'
import GifsContext from '../context/GifsContext'

const initialPage = 0

export default function useGifs({ keyword } = {keyword: null}){
    const [loading, setLoading] = useState(false)
    const [loadingNextPage, setNextPage] = useState(false)

    const [page, setPage] = useState(initialPage)
    const {gifs, setGifs} = useContext(GifsContext)

    const keywordToUse = keyword ? keyword : localStorage.getItem('lastSearch')

    useEffect(() =>{
        setLoading(true)


        getGifs({ keyword: keywordToUse })
        .then(gifs =>{
            setGifs(gifs)
            setLoading(false)})
            localStorage.setItem('lastSearch', keywordToUse)
      }, [keyword, setGifs, keywordToUse])
      
    useEffect(() =>{
        if(page === initialPage) return

        setNextPage(true)
        getGifs({ keyword: keywordToUse, page })
         .then(nextGifs => {
             setGifs(prevGifs => prevGifs.concat(nextGifs))
             setNextPage(false)
         })
    }, [keywordToUse, page, setGifs])
      return {loading, gifs, loadingNextPage, setPage}
}