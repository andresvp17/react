import { useState, useEffect } from 'react'

const useComment = ({ comment }) => {
  const [comments, setComments] = useState([])
  useEffect(() => {
    if (comment === '' || !comment) return
    setComments(comments)
  }, [])

  return { comments, setComments }
}

export default useComment
