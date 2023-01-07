import React, { useState, useCallback, useRef } from 'react'
import { BsSearch } from 'react-icons/bs'
import styles from './styles.module.css'
import { useNavigate } from 'react-router-dom'

const SearchBar = () => {
  const [keyword, setKeyword] = useState('')
  const navigate = useNavigate()
  const inputRef = useRef(null)
  const searchSong = useCallback((e) => {
    e.preventDefault()
    if (keyword === '') return
    navigate(`search/${keyword}`)
  }, [navigate, keyword])

  return (
    <form className={styles.formContainer} onSubmit={searchSong}>
      <BsSearch className={styles.searchIcon} />
      <input
        onChange={() => {
          setKeyword(inputRef.current.value)
        }} ref={inputRef} className={styles.inputSearch} autoComplete='off' type='text' name='formInput' placeholder='Search here...'
      />
    </form>
  )
}

export default SearchBar
