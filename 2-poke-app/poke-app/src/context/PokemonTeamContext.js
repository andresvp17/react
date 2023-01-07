import React, { useState } from 'react'

const Context = React.createContext([])

export const PokeTeamProvider = ({ children }) => {
  const [team, setTeam] = useState([])
  const [createTeam, setCreateTeam] = useState(false)
  return (
    <Context.Provider value={{ team, setTeam, createTeam, setCreateTeam }}>
      {children}
    </Context.Provider>
  )
}

export default Context
