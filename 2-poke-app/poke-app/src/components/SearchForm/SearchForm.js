import React, { useCallback, useRef } from 'react'
import usePokemon from '../../hooks/usePokemon'
import FormPokemon from './formPokemon'
import { useNavigate } from 'react-router-dom'
import { Buttons, PrevPageButton, NextPageButton } from '../Buttons/styles'

const SearchForm = () => {
  const navigate = useNavigate()
  const { setPage } = usePokemon()
  const inputRef = useRef(null)

  const searchPokemon = useCallback((e) => {
    e.preventDefault()
    navigate(`/${inputRef.current.value.toLowerCase()}`)
  }, [navigate])

  const getNextPage = useCallback(() => setPage(prev => {
    if (prev + 1 >= 57) {
      localStorage.setItem('lastPage', 0)
      return 0
    } else {
      localStorage.setItem('lastPage', prev + 1)
      return prev + 1
    }
  }), [setPage])

  const getPrevPage = useCallback(() => setPage(prev => {
    if (prev - 1 < 0) {
      localStorage.setItem('lastPage', 56)
      return 56
    } else {
      localStorage.setItem('lastPage', prev - 1)
      return prev - 1
    }
  }), [setPage])

  return (
    <>
      <FormPokemon submitPokemon={searchPokemon} inputRef={inputRef} />
      <Buttons>
        <PrevPageButton onClick={getPrevPage}>Previous Page</PrevPageButton>
        <NextPageButton onClick={getNextPage}>Next Page</NextPageButton>
      </Buttons>
    </>
  )
}

export default SearchForm
