import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { PokemonSprite, PokemonName, PokemonType, PokemonTypeContainer } from '../PokemonCard/styles'
import { SinglePokemonGridItem } from './styles'
import { SpinnerLoadingSingle } from '../Spinner/Spinner'

import useSinglePokemon from '../../hooks/useSinglePokemon'
import { Helmet } from 'react-helmet'

const SinglePokemon = () => {
  const { name } = useParams()
  const { singlePokemon } = useSinglePokemon({ name })
  return (
    singlePokemon.length === 0
      ? <SpinnerLoadingSingle />
      : <>
        <Helmet><title>PokeSearch | {name}</title></Helmet>
        <SinglePokemonGridItem key={singlePokemon.id}>
          <Link to={`/search/${singlePokemon.name}`}>
            <PokemonSprite src={singlePokemon.front_default} alt={singlePokemon.name} />
          </Link>
          <PokemonName>{singlePokemon.name}</PokemonName>
          <PokemonTypeContainer>
            {singlePokemon.types.map(type => {
              return (
                <PokemonType key={singlePokemon.id} type={type.type.name}>
                  {type.type.name}
                </PokemonType>
              )
            })}
          </PokemonTypeContainer>
        </SinglePokemonGridItem>
      </>
  )
}
export default SinglePokemon
