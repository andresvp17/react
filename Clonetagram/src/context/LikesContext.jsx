import React, { useState } from 'react'
import PropTypes from 'prop-types'

const Context = React.createContext([])

export const LikesContext = ({ children }) => {
  const [likes, setLikes] = useState([])

  return (
    <Context.Provider value={{ likes, setLikes }}>
      {children}
    </Context.Provider>
  )
}

LikesContext.propTypes = {
  children: PropTypes.object
}

export default Context
