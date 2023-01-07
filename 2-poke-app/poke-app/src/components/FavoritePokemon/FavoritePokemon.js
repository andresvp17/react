import React from 'react'
import PokemonCard from '../PokemonCard/PokemonCard'
import { PokemonGrid } from '../Pokemon/styles'
import useFavoritePokemon from '../../hooks/useFavPokemon'
import SpinnerLoading from '../Spinner/Spinner'
import { Helmet } from 'react-helmet'

const FavoritePokemon = () => {
  const { fav, favLoading } = useFavoritePokemon()

  return (
    fav.length === 0 && favLoading
      ? <>
      <Helmet><title>Loading...</title></Helmet>
      <SpinnerLoading />
      </>
      : !favLoading && fav.length !== 0
      ? <>
        <Helmet><title>PokeSearch | Favorites</title></Helmet>
        <PokemonGrid>
          {
              fav.map(favPoke => {
                const { name, id, types, front_default } = favPoke
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
        </>
        : <>
            <Helmet><title>PokeSearch | Favorites</title></Helmet>
            <h1>There are no favorites yet</h1>
        </>
  )
}

export default FavoritePokemon
