const postNewTeam = ({ teamName, pokemonIDs, user }) => {
  fetch('http://localhost:8000/teams', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      teamName,
      pokemonIDs, 
      user
    })
  })
    .then(res => res.json())
    .then(res => {
      console.log(res)
      const { teamName, pokemonIDs, userInfo } = res
      return { teamName, pokemonIDs, userInfo }
    })
}

export const getPokemonTeam = async ({ username }) => {
  if(!username) return
  return await fetch(`http://localhost:8000/users/${username}`)
    .then(res => res.json())
    .then(res => {
      const { teams } = res
      return teams
    })
}

export const getEachMember = ({ members }) => {
  return members.map(member => {
    return member.pokemonIDs.map(async id => {
      return await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then(res => res.json())
        .then(res => {
          const { teamName } = member
          const { sprites, name } = res
          const { front_default } = sprites
          return { front_default, name, teamName }
        })
    })
  })
}

export const deleteTeam = async ({ team }) => {
  return await fetch(`http://localhost:8000/teams/${team}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(res => res.json())
    .then(res => {
      console.log(res)
    })
}

export default postNewTeam
