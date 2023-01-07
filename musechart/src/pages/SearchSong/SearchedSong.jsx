import React from 'react'
import styles from './styles.module.css'
import { useParams } from 'react-router-dom'
import Card from '../../components/Card/Card'
import useSearch from '../../hooks/useSearch'
import Spinner from '../../components/Spinner/Spinner'

const SearchedSong = () => {
  const { keyword } = useParams()
  const { keywordResponse, loading } = useSearch({ keyword })
  return (
    loading
      ? <Spinner />
      : <div className={styles.listOfTracks}>
        {
            keywordResponse.map(track => {
              return <Card trackInfo={track.track} key={track.track.key} />
            })
          }
        </div>
  )
}

export default SearchedSong
