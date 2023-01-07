import { useState, useEffect } from 'react'
import { getPokemonTeam, getEachMember } from '../services/postNewTeam'
import useLogin from './useLogin'

const useCreateTeam = () => {
  const { userContext } = useLogin()
  const [groupMembers, setGroupMembers] = useState([])
  const [filledTeams, setFilledTeams] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (!userContext) return
    setLoading(true)
    getPokemonTeam({ username: userContext.user || JSON.parse(window.sessionStorage.getItem('userContext')).user})
      .then(res => {
        if (res.length === 0) return
        setGroupMembers(res)
      })
  }, [userContext])

  useEffect(() => {
    Promise.all(getEachMember({ members: groupMembers }))
      .then(res => {
        const promises = res.map(async promises => {
          return await Promise.all(promises)
        })
        Promise.all(promises).then(res => {
          setFilledTeams(res)
          setLoading(false)
        })
      })
  }, [groupMembers])

  return { groupMembers, filledTeams, loading }
}

export default useCreateTeam
