import styled from "styled-components"
import { PokemonGridItem } from "../PokemonCard/styles"

export const GeneralContainer = styled.div`
    width: 90%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    padding: 10px 0;
`
    
export const SinglePokemonItem = styled(PokemonGridItem)`
    min-width: 200px;
    margin-bottom: 1rem;
    padding: 10px;

    @media (max-width: 400px){
        width: 90%;
    }
`

export const PokemonInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    padding: 10px;
    background-color: #37465b;
    box-shadow: 0 5px 10px #111;

    @media (max-width: 400px){
        width: 90%;
    }
`

export const PokemonInfoStats = styled.div`
    display: flex;
    flex-direction: column;
`

export const PokemonInfoList = styled.ul`
    padding-left: 0;
    margin-top: 0;
    list-style: none;
    text-transform: capitalize;
`