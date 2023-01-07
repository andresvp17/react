import { createContext, useState } from 'react'

const Context = createContext(false)

export const UserContextProvider = ({ children }) => {
  const [userContext, setUserContext] = useState(() => sessionStorage.getItem('userContext'))
  return (
    <Context.Provider value={{ userContext, setUserContext }}>
      {children}
    </Context.Provider>
  )
}

export default Context
