import React from "react";
import useSingleGif from "../../../hooks/useSingleGif";
import LoadingText from '../../loading/loading'
import GIF from "../../GIF/GIF";
import { Redirect } from "wouter";
import {Helmet} from "react-helmet";

export default function Detail({ params }){
    const {gif, isError, isLoading} = useSingleGif({id: params.id})
    const title = gif ? gif.title : ''
    
    
    if(isLoading) return(
    <>
        <Helmet>
            <title>Loading...</title>
        </Helmet>
        <LoadingText />
    </> 
    )
    if(isError) return <Redirect to="/404"/>
    if(!gif) return null

    return(
    <div>
        <Helmet>
            <title>{title} | Galliard</title>
        </Helmet>
        <h1>GIF ID: {params.id}</h1>
        <GIF {...gif}></GIF>
    </div>
    )
}