import React, { useContext } from 'react'
import { PokemonGrid } from './styles'
import usePokemon from '../../hooks/usePokemon'
import useLogin from '../../hooks/useLogin'
import PokemonCard from '../PokemonCard/PokemonCard'
import SearchForm from '../SearchForm/SearchForm'
import PokemonTeam from '../PokemonTeam/PokemonTeam'
import PokemonTeamContext from '../../context/PokemonTeamContext'
import SpinnerLoading from '../Spinner/Spinner'
import { Helmet } from 'react-helmet'

const Pokemon = () => {
  const { pokeContext, loading } = usePokemon()
  const { logged } = useLogin()
  const { createTeam } = useContext(PokemonTeamContext)

  return (
    <>
      {createTeam && logged ? <PokemonTeam /> : null}
      <SearchForm />
      {
        loading
          ? <>
            <Helmet><title>Loading...</title></Helmet>
            <SpinnerLoading />
          </>
          : <PokemonGrid>
            <Helmet><title>PokeSearch | Pokemon Searcher</title></Helmet>
            {
              pokeContext.map(pokemon => {
                const { name, id, types, front_default } = pokemon
                return (
                  <PokemonCard
                    key={id}
                    PokeName={name}
                    PokeSprite={front_default}
                    PokeID={id}
                    PokeTypes={types}
                  />
                )
              })
            }
          </PokemonGrid>
        }
    </>
  )
}

export default Pokemon
