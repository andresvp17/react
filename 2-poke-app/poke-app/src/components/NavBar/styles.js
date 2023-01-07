import styled from 'styled-components'
import { Link } from 'react-router-dom'

const translatePercentage = ({ show }) => !show ? '100%' : '0%' 

export const LinksContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    background-color: #37465b;
    box-shadow: 0 5px 10px #111;

    @media (max-width: 450px){
        width: 40%;
        height: 100vh;
        position: fixed;
        top: 0;
        flex-direction: column;
        z-index: 10;
        transition: transform .3s;
        transform: translateX(-${props => translatePercentage({ show: props.show })});
    }
`

export const Links = styled(Link)`
    padding: 5px;
    color: aliceblue;
    text-decoration: none;
    font-weight: 400;

    @media (min-width: 768px){
        transition: color .3s;
        &:hover{
            color: #5affe7;
        }
    }
`

export const LogoutCta = styled.button`
    border: none;
    outline: none;
    background-color: transparent;
    padding: 5px;
    color: aliceblue;
    text-decoration: none;
    font-size: calc(10px + 2vmin);
    cursor: pointer;

    @media (min-width: 768px){
        transition: color .3s;
        &:hover{
            color: #5affe7;
        }
    }
`

export const HamburgerContainer = styled.div`
    display: none;

    @media (max-width: 440px){
        display: block;
        width: 100%;
        height: 30px;
        position: relative; 
    }
`

export const Hamburger = styled.span`
    display: none;
    
    @media (max-width: 440px){
        display: block;
        position: absolute;
        top: 15px;
        right: 10px;
        width: 30px;
        height: 3px;
        background-color: aliceblue;
        cursor: pointer;

        &::before,
        &::after{
            content: "";
            position: absolute;
            left: 0;
            width: 30px;
            height: 3px;
            background-color: aliceblue;
            cursor: pointer;
        }

        &::before{
            top: -10px;
        }

        &::after{
            bottom: -10px;
        }
    }
`

