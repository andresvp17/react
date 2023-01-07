import styled from 'styled-components'

export const LogFormContainer = styled.div`
    height: 90vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

export const LogForm = styled.form`
    max-width: 400px;
    height: 300px;
    margin: 0 auto;
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    box-shadow: 0 0 10px #111;
    background-color: #37465b;
`

export const LogInput = styled.input`
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

    &::placeholder{
        color: aliceblue;
    }
`

export const LogButton = styled.button`
    border: none;
    border-radius: 15px;
    padding: 0.50rem 4rem;
    margin-left: 10px;
    background-color: #726eff;
    color: aliceblue;
    font-weight: 600;
    cursor: pointer;    
    font-weight: 600;
    transition: color .5, background-color .5s;

    @media (min-width: 768px){
        &:hover{
            color: #111;
            background-color: #5affe7;
        }
    }
`

export const SmallText = styled.small`
    width: 70%;
    text-align: center;
    font-size: 14px;
    font-weight: 600;
` 