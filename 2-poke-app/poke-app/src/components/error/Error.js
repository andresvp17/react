import React from "react"
import { ErrorImage, ErrorText } from "./styles"

const ErrorPage = () =>{
    return(
        <>
            <ErrorText>We are sorry. An error has ocurred</ErrorText>
            <ErrorImage src={'https://c.tenor.com/lAPm_rQeBN0AAAAC/pokemon-pikachu.gif'} alt='Pikachu Saddie'/>
        </>
    )
}

export default ErrorPage