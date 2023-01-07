import styled from "styled-components"

const types = {
    'grass': '#78c850',
    'water': '#6890f0',
    'fire': '#f08030',
    'normal': '#a8a878',
    'electric': '#f8d030',
    'ice': '#98d8d8',
    'fighting': '#c03028',
    'poison': '#a040a0',
    'ground': '#e0c068',
    'flying': '#a890f0',
    'psychic': '#f85888',
    'bug': '#a8b820',
    'rock': '#b8a038',
    'ghost': '#705898',
    'dark': '#705848',
    'dragon': '#7038f8',
    'steel': '#b8b8d0',
    'fairy': '#f0b6bc'
}

export const PokemonGridItem = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    padding: 10px 0;
    box-shadow: 0 5px 10px #111;
    background-color: #37465b;
`

export const PokemonSprite = styled.img`
    border-radius: 50%;
    background-color: #212b38;
`

export const PokemonName = styled.p`
    color: aliceblue;
    text-transform: capitalize;
    margin: 10px 0;
`

export const PokemonTypeContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    aling-items: center;
`

const getType = (props) =>{
    const typesEntries = Object.entries(types)
        for(let i = 0; i < typesEntries.length; i++){
            if(typesEntries[i][0] === props.type) return typesEntries[i][1]
        }
}

export const PokemonType = styled.p`
    margin: 0;
    padding: .15rem .8rem;
    border-radius: 25px;
    color: aliceblue;
    background-color: ${props => getType(props)};
    font-size: 16px;
    font-weight: 700;
    text-transform: capitalize;
`

export const FavoritePokemon = styled.span`
    width: 30px;
    position: absolute;
    top: 0;
    right: 0;
    font-size: 20px;
    background-color: #212b38;
    cursor: pointer;

    @media (min-width: 768px){
        transition: background-color .2s;
        &:hover{
            background-color: #5affe7;
        }
    }
` 

export const MemberPokemon = styled.span`
    width: 30px;
    position: absolute;
    bottom: 0;
    right: 0;
    font-size: 20px;
    background-color: #212b38;
    cursor: pointer;

    &:hover{
        background-color: #5affe7;
    }
`