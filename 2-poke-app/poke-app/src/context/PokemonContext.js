import { createContext, useState } from 'react'

const Context = createContext([])

export const PokemonContextProvider = ({ children }) => {
  const [pokeContext, setPokeContext] = useState([])
  return (
    <Context.Provider value={{ pokeContext, setPokeContext }}>
      {children}
    </Context.Provider>
  )
}

export default Context
