import { useCallback, useContext, useEffect, useState } from 'react'
import PokemonTeam from '../context/PokemonTeamContext'
import getTeamMember from '../services/GetTeamMember'

const usePokemonTeam = () => {
  const { team } = useContext(PokemonTeam)
  const [members, setMembers] = useState([])
  const [show, setShow] = useState(false)

  useEffect(() => {
    if (team.length === 0) return
    Promise.all(getTeamMember({ Members: team }))
      .then(res => {
        setMembers(res)
      })
  }, [team])

  const handleModal = useCallback(() => {
    !show ? setShow(true) : setShow(false)
  }, [show])

  return { members, setMembers, setShow, show, handleModal }
}

export default usePokemonTeam
