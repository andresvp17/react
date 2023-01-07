import { useState, useEffect } from 'react'
import { getKeyword } from '../services/getKeyword'

const useSearch = ({ keyword }) => {
  const [keywordResponse, setKeywordResponse] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    getKeyword({ keyword })
      .then(response => {
        setKeywordResponse(response)
        setLoading(false)
      })
  }, [keyword])

  return { keywordResponse, loading }
}

export default useSearch
