import styled from 'styled-components'

export const InputPokemon = styled.input`
    border: none;
    outline: none;
    padding: .25rem 1rem;
    margin-bottom: 10px;
`

export const SearchButton = styled.button`
    border: none;
    outline: none;
    padding: .25rem 1rem;
    margin-bottom: 10px;
    background-color: #726eff;
    color: aliceblue;
    font-weight: 600;
    cursor: pointer;
    transition: color .3s, background-color .3s;
    
    @media (min-width: 768px){
        &:hover{
            color: #111;
            background-color: #5affe7;
        }
    }
`