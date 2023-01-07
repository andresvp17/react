import styled from "styled-components";

export const Buttons = styled.div`
    display: flex;
    align-item: center;
    justify-content: center;
    margin: 10px 0;
`

export const NextPageButton = styled.button`
    border: none;
    border-radius: 15px;
    padding: 0.25rem 1rem;
    margin-left: 10px;
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

export const PrevPageButton = styled(NextPageButton)`
    margin-left: 0;
`