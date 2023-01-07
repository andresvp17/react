import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { UserContextProvider } from './context/UserContext'
import { PokemonContextProvider } from './context/PokemonContext'
import { PokeTeamProvider } from './context/PokemonTeamContext'
import { FavoritesContext } from './context/PokemonFavoriteContext'
import Pokemon from './components/Pokemon/Pokemon'
import NavBar from './components/NavBar/NavBar'
import SinglePokemon from './components/SinglePokemon/SinglePokemon'
import PokemonTeamPage from './components/PokemonTeamPage/PokemonTeamPage'
import InfoPokemon from './components/InfoPokemon/InfoPokemon'
import ErrorPage from './components/error/Error'
import FavoritePokemon from './components/FavoritePokemon/FavoritePokemon'
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import usePokemon from './hooks/usePokemon'

function App () {
  const { loading } = usePokemon()
  return (
    <UserContextProvider>
      <PokeTeamProvider>
        <PokemonContextProvider>
          <FavoritesContext>
            <BrowserRouter>
              <div className='App'>
                <div className='App-content'>
                  <NavBar />
                  <Routes>
                    <Route path='/' element={<Pokemon loading={loading} />} />
                    <Route path='/:name' element={<SinglePokemon />} />
                    <Route path='/error' element={<ErrorPage />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/register' element={<Register />} />
                    <Route path='/teams' element={<PokemonTeamPage />} />
                    <Route path='/search/:name' element={<InfoPokemon />} />
                    <Route path='/favorites' element={<FavoritePokemon />} />
                  </Routes>
                </div>
              </div>
            </BrowserRouter>
          </FavoritesContext>
        </PokemonContextProvider>
      </PokeTeamProvider>
    </UserContextProvider>
  )
}

export default App
