import React, { useContext, useCallback, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { LinksContainer, Links, LogoutCta, Hamburger, HamburgerContainer } from './styles'
import PokemonTeam from '../../context/PokemonTeamContext'
import useLogin from '../../hooks/useLogin'

const NavBar = () => {
  const { logout, logged } = useLogin()
  const { createTeam, setCreateTeam, setTeam } = useContext(PokemonTeam)
  const [show, setShow] = useState(false)
  const location = useLocation()

  const handleShow = useCallback(() => !show ? setShow(true) : setShow(false), [show])

  const handleCreateTeam = useCallback(() => {
    if (!createTeam && !logged) return

    if (!createTeam) {
      setCreateTeam(true)
    } else {
      setCreateTeam(false)
      setTeam([])
    }
  }, [createTeam, setCreateTeam, logged, setTeam])

  return (
    <>
      <HamburgerContainer>
        <Hamburger onClick={handleShow} />
      </HamburgerContainer>

      <LinksContainer show={show}>
        <Links to='/'>Home</Links>
        <Links to='/favorites'>Favorites</Links>
        {
                !logged
                  ? <>
                    <Links to='/login'>LogIn</Links>
                    <Links to='/register'>Register</Links>
                  </>
                  : <>
                    <LogoutCta onClick={logout}>Logout</LogoutCta>
                    <Links to='/teams'>Teams</Links>
                    </>
            }
        {
                !createTeam && logged && location.pathname !== '/teams'
                  ? <LogoutCta onClick={handleCreateTeam}>Create Team</LogoutCta>
                  : !logged || location.pathname === '/teams'
                      ? null
                      : <LogoutCta onClick={handleCreateTeam}>Discard Team</LogoutCta>
            }
      </LinksContainer>
    </>
  )
}

export default NavBar
