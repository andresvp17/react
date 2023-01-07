import React from 'react'
import { InputPokemon, SearchButton } from './styles'

const FormPokemon = ({ submitPokemon, inputRef }) => {
  return (
    <form onSubmit={submitPokemon}>
      <InputPokemon ref={inputRef} type='text' placeholder='Search for a pokemon...' />
      <SearchButton>Search!</SearchButton>
    </form>
  )
}

export default FormPokemon
