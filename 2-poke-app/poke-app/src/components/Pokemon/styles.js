import styled from "styled-components";
import { BtnSend } from "../PokemonTeam/styles";

export const PokemonGrid = styled.div`
    width: 95%;
    margin: 0 auto;
    padding: 1rem 0;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    grid-auto-rows: repeat(auto-fill, minmax(150px, 1fr));
    gap: 15px;
`

export const ModalContainer = styled.div`
    position: fixed;
    width: 100%;
    bottom: 0;
    top: 0;
    left: 0;
    right: 0;
    display:flex;
    justify-content: center;
    align-items: center;
    background-color: #37465bd9;
    backdrop-filter: blur(5px);
    z-index: 15;
`
    
    export const Modal = styled.form`
    width: 250px;
    height: 250px;
    bottom: 0;
    top: 0;
    left: 0;
    right: 0;
    display:flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    box-shadow: 0 0 10px #111;
    background-color: #37465b;
`

export const ModalInput = styled.input`
    width: 70%;
    max-width: 100%;
    outline: none;
    border: none;
    border-bottom: 2px solid #5affe7;
    margin-bottom: 1rem;
    padding: 5px 15px;
    font-weight: 600;
    color: aliceblue;
    background-color: transparent;
`

export const SendTeamBtn = styled(BtnSend)`
    margin: 10px 0;

    &:hover{
        color: #111;
        background-color: #5affe7;
    }
`