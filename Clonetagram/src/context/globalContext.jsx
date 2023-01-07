import React, { createContext, useState } from 'react'
import PropTypes from 'prop-types'

const Context = createContext([])

export const GlobalContextProvider = ({ children }) => {
  const [globalInfo, setGlobal] = useState([])

  return (
    <Context.Provider value={{ globalInfo, setGlobal }}>
      {children}
    </Context.Provider>
  )
}

GlobalContextProvider.propTypes = {
  children: PropTypes.object
}

export default Context
