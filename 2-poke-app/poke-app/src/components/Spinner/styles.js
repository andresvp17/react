import { keyframes } from "styled-components"
import styled from 'styled-components'

const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`

export const Spinner = styled.div`
    width: 80px;
    height: 80px;
    position: absolute;
    top: 8rem;
    margin: 1rem auto;
    border: 5px solid #5affe7; 
    border-radius: 50%;
    border-left-color: transparent;
    place-self: center;
    animation: ${rotate} 2s linear infinite;
`

export const SpinnerContainer = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 1rem auto;
`

export const SingleSpinner = styled.div`
    width: 80px;
    height: 80px;
    margin: 1rem auto;
    border: 5px solid #5affe7; 
    border-radius: 50%;
    border-left-color: transparent;
    animation: ${rotate} 2s linear infinite;
`