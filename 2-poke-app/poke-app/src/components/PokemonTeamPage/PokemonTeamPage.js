import React from 'react'
import { Link } from 'react-router-dom'
import { TeamsContainer, TeamName, SingleTeam, MembersContainer, Member, DeleteTeam, DeleteTeamContainer } from './styles'
import useCreateTeam from '../../hooks/useCreateTeam'
import { deleteTeam } from '../../services/postNewTeam'
import SpinnerLoading from '../Spinner/Spinner'
import { nanoid } from 'nanoid'
import { Helmet } from 'react-helmet'

const PokemonTeamPage = () => {
  const { filledTeams, loading } = useCreateTeam()
  return (
    <TeamsContainer>
      {
        loading
          ? <>
            <Helmet><title>Loading...</title></Helmet>
            <SpinnerLoading />
          </>
          : filledTeams.length !== 0
            ? filledTeams.map(team => {
              <Helmet><title>PokeSearch | Teams</title></Helmet>
              return (
                <SingleTeam key={nanoid()}>
                  <DeleteTeamContainer>
                    <DeleteTeam onClick={() => deleteTeam({ team: team[0].teamName })} />
                  </DeleteTeamContainer>
                  <TeamName>{team[0].teamName}</TeamName>
                  <MembersContainer>
                    {
                      team.map(member => {
                        return (
                          <Link key={nanoid()} to={`/search/${member.name}`}>
                            <Member scale='true' src={member.front_default} alt={member.name} />
                          </Link>
                        )
                      })
                    }
                  </MembersContainer>
                </SingleTeam>
              )
            })
            : <>
              <h1>There are no teams yet</h1>
              <Helmet><title>PokeSearch | Teams</title></Helmet>
              </>
        }
    </TeamsContainer>
  )
}

export default PokemonTeamPage
