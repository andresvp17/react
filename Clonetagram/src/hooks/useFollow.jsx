import { useState, useEffect } from 'react'
import { getFollows } from '../backend/followServices'

const useFollow = ({ username }) => {
  const [follow, setFollow] = useState([])

  useEffect(() => {
    getFollows({ username })
      .then(({ data }) => {
        setFollow(data)
        console.log(data)
      })
  }, [setFollow])

  return { follow, setFollow }
}

export default useFollow
