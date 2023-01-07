import { createContext, useState } from 'react'

const Context = createContext([])

export const FavoritesContext = ({ children }) => {
  const basicState = localStorage.getItem('likedPokemon') ? JSON.parse(localStorage.getItem('likedPokemon')) : []
  const [favorites, setFavorites] = useState(basicState)
  return (
    <Context.Provider value={{ favorites, setFavorites }}>
      {children}
    </Context.Provider>
  )
}

export default Context
