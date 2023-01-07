import styled from "styled-components"

export const PokemonTeamBar = styled.div`
    width: 100px;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    z-index: 10;
    background-color: #5affe685;
`

export const MemberContainer = styled.div`
    width: 70px;
    height: 70px;
    border-radius: 50%;
    position: relative;
    margin: 10px 2rem;
    background-color: #37465b78;
`

export const Member = styled.img`
    max-width: 100%;
`

export const TakeOutMember = styled.span`
    width: 20px;
    height: 20px;
    font-size: 15px;
    text-align: center;
    position: absolute;
    top: 0;
    right: 0;
    border-radius: 50%;
    color: #333;
    background-color: aliceblue;
    cursor: pointer;
`

export const BtnSend = styled.button`
    border: none;
    border-radius: 15px;
    padding: 0.25rem 1.5rem;
    background-color: #726eff;
    color: aliceblue;
    font-weight: 600;
    cursor: pointer;
    transition: color .5, background-color .5s;

    &:hover{
        background-color: #37465b;
    }
`