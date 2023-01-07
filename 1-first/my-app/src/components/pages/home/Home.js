import React from "react";
import useGifs from "../../../hooks/useGifs";
import GIF from "../../GIF/GIF";
import SearchForm from "../../SearchForm";
import './home.css'
import TrendingSearches from "../../TrendingSearches/trendingSearches";
import { Helmet } from "react-helmet"

export default function Home() {
    const { loading, gifs } = useGifs()

    return(
        <>
            <Helmet>
                <title>Galliard | GIFs Searcher</title>
            </Helmet>
            <SearchForm />
            <h3>Last Search</h3>
            <div className='gifs__layout'>
            {
                gifs.map(gif => 
                <GIF
                    key={gif.id} 
                    title={gif.title} 
                    url={gif.url} 
                    id={gif.id}
                />)
            }
            </div>
            <TrendingSearches />
        </>
    )
}