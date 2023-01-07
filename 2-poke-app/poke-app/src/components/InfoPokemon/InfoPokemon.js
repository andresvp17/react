import React from 'react'
import useSinglePokemon from '../../hooks/useSinglePokemon'
import { PokemonInfoContainer, PokemonInfoList, GeneralContainer, SinglePokemonItem } from './styles'
import { PokemonSprite, PokemonName, PokemonTypeContainer, PokemonType } from '../PokemonCard/styles'
import { useParams } from 'react-router-dom'
import SpinnerLoading from '../Spinner/Spinner'
import { Helmet } from 'react-helmet'

const InfoPokemon = () => {
  const { name } = useParams()
  const { singlePokemon } = useSinglePokemon({ name })
  return (
    singlePokemon.length === 0
      ? <>
      <Helmet><title>PokeSearch | {name}</title></Helmet>
      <SpinnerLoading />
      </>
      : <GeneralContainer>
        <SinglePokemonItem>
          <PokemonSprite src={singlePokemon.front_default} alt={singlePokemon.name} />
          <PokemonName>{singlePokemon.name} #{singlePokemon.id}</PokemonName>
          <PokemonTypeContainer>
            {singlePokemon.types.map(type => {
              return (
                <PokemonType key={singlePokemon.id} type={type.type.name}>
                  {type.type.name}
                </PokemonType>
              )
            })}
          </PokemonTypeContainer>
        </SinglePokemonItem>

        <PokemonInfoContainer>
          <PokemonInfoList>
            {singlePokemon.abilities.map(ability => {
              return (
                <li>{ability.ability.name}</li>
              )
            })}
          </PokemonInfoList>
          <PokemonInfoList>
            {singlePokemon.stats.map(stat => {
              return (
                <li>{stat.stat.name}: {stat.base_stat}</li>
              )
            })}
          </PokemonInfoList>
        </PokemonInfoContainer>
      </GeneralContainer>
  )
}

export default InfoPokemon
