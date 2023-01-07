import React, { useContext, useCallback } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { PokemonGridItem, PokemonSprite, PokemonName, PokemonType, PokemonTypeContainer, FavoritePokemon, MemberPokemon } from './styles'
import UpdateContext from '../../context/PokemonFavoriteContext'
import useLogin from '../../hooks/useLogin'
import PokemonTeam from '../../context/PokemonTeamContext'
import { nanoid } from 'nanoid'

const PokemonCard = ({ PokeName, PokeSprite, PokeID, PokeTypes } = {}) => {
  const { favorites, setFavorites } = useContext(UpdateContext)
  const { createTeam, setTeam, team } = useContext(PokemonTeam)
  const { logged } = useLogin()
  const navigate = useNavigate()
  const emoji = favorites.includes(PokeID) ? '❤️' : '➕'

  const handleFavorite = useCallback(() => {
    if (!logged) return navigate('/login')
    const updated = [...favorites]
    const isFavorite = updated.indexOf(PokeID)

    isFavorite >= 0 ? updated.splice(isFavorite, 1) : updated.push(PokeID)

    setFavorites(updated)
    window.localStorage.setItem('likedPokemon', JSON.stringify(updated))
  }, [PokeID, favorites, logged, navigate, setFavorites])

  const handleTeam = useCallback(() => {
    if (team.length >= 6) return
    const newMember = team.length === 0 ? [] : [...team]
    if (newMember.includes(PokeID)) return

    newMember.push(PokeID)
    setTeam(newMember)
  }, [PokeID, setTeam, team])

  return (
    <PokemonGridItem>
      <FavoritePokemon onClick={handleFavorite}>
        {emoji}
      </FavoritePokemon>
      {
        createTeam && logged ? <MemberPokemon onClick={handleTeam}>🎇</MemberPokemon> : null
      }
      <Link to={`/search/${PokeName}`}>
        <PokemonSprite src={PokeSprite} alt={PokeName} />
      </Link>
      <PokemonName>{PokeName}</PokemonName>
      <PokemonTypeContainer>
        {PokeTypes.map(type => <PokemonType key={nanoid()} type={type.type.name}>{type.type.name}</PokemonType>)}
      </PokemonTypeContainer>
    </PokemonGridItem>
  )
}

export default React.memo(PokemonCard)
