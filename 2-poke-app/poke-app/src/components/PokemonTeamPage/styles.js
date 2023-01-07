import styled from "styled-components"

export const TeamsContainer = styled.div`
    width: 90%;
    margin: 0 auto;
    padding: 2rem 0;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-template-rows: 1fr;
    gap: 15px;
`

export const SingleTeam = styled.div`
    text-align: center;
    box-shadow: 0 0 10px #111;
    border-radius: 5px;
    background-color: #37465b;
`

export const TeamName = styled.p`
    text-transform: capitalize;
    font-weight: 600;
`

export const MembersContainer = styled.div``

export const DeleteTeamContainer = styled.div`
    position: relative;
    height: 30px;
`

export const DeleteTeam = styled.span`
    display: flex;
    align-items: center;
    position: absolute;
    top: 10px;
    left: 10px;
    width: 30px;
    height: 30px;
    cursor: pointer;
    
    &::after,
    &::before{
        content: "";
        display: block;
        position: absolute;
        width: 100%;
        height: 3px;
        background-color: aliceblue;
    }

    &::after{
        transform: rotate(45deg);
    }
    &::before{
        transform: rotate(-45deg);
    }
`

export const Member = styled.img`
    transition: all ease-in-out 0.2s;
    &:hover{
        transform: scale(1.1);
    };
`