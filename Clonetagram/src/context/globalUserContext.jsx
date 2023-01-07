import React, { createContext, useState } from 'react'
import { supabase } from '../backend/supabase'
import PropTypes from 'prop-types'

const Context = createContext(false)

export const GlobalUser = ({ children }) => {
  const session = supabase.auth.session()
  const [userGlobal, setUser] = useState(session)

  return (
    <Context.Provider value={{ userGlobal, setUser }}>
      {children}
    </Context.Provider>
  )
}
GlobalUser.propTypes = {
  children: PropTypes.array
}

export default Context
