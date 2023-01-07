import React, { useCallback, useEffect, useRef } from 'react'
import GIF from "../GIF/GIF"
import useGifs from '../../hooks/useGifs';
import useIsNear from '../../hooks/useIsNear';
import LoadingText from '../loading/loading'
import debounce from 'just-debounce-it';
import SearchForm from '../SearchForm';
import {Helmet} from 'react-helmet';
import './gifLayout.css'

export default function ListOfGifs({ params }){
    const { keyword } = params
    const { loading, gifs, setPage } = useGifs({ keyword })
    const externalRef = useRef()
    const { isNear } = useIsNear({ 
        externalRef: loading ? null : externalRef,
        once: false
    })

    const title = gifs ? `${keyword}` : ''

    const debouncedHandleNextPage = useCallback(debounce(
        () => setPage(prevPage => prevPage + 1), 200
        ), [])
        
    useEffect(() =>{
        console.log(isNear);
        if(isNear) debouncedHandleNextPage()
    }, [debouncedHandleNextPage, isNear])

    return(
        loading 
        ? <LoadingText />
        : <> 
        <Helmet>
            <title>{decodeURI(title)} | Galliard</title>
            <meta name="description" content={title}></meta>
        </Helmet>
        <header>
            <SearchForm />
        </header>
        <div className='gifs__layout'>
        {
        gifs.map(gif => 
            <GIF
                key={gif.id} 
                title={gif.title} 
                url={gif.url}
                id={gif.id} />)
        }
        </div>
        <div ref={externalRef}></div>
        </>
    )
} 