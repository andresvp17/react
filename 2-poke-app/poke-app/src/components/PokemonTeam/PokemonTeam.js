import React, { useCallback, useContext, useRef } from 'react'
import { MemberContainer, PokemonTeamBar, TakeOutMember, Member, BtnSend } from './styles'
import { Modal, ModalContainer, ModalInput, SendTeamBtn } from '../Pokemon/styles'
import { SmallText } from '../Login/styles'
import usePokemonTeam from '../../hooks/usePokemonTeam'
import PokemonTeamContext from '../../context/PokemonTeamContext'
import postNewTeam from '../../services/postNewTeam'
import { nanoid } from 'nanoid'

const PokemonTeam = () => {
  const inputRef = useRef(null)
  const { members, handleModal, show, setShow } = usePokemonTeam()
  const { team, setTeam, setCreateTeam } = useContext(PokemonTeamContext)
  const user = JSON.parse(window.sessionStorage.getItem('userContext')).user

  const sendTeam = useCallback(() => {
    if (team.length === 0) return
    postNewTeam({ teamName: inputRef.current.value, pokemonIDs: team, user})
    setShow(false)
    setTeam([])
    setCreateTeam(false)
  }, [setShow, team, setTeam, setCreateTeam, user])

  const handleTakeOutMember = useCallback((pokeID) => {
    const updateMember = [...team]
    const isPart = updateMember.indexOf(pokeID)

    if (updateMember.indexOf(pokeID) >= 0) updateMember.splice(isPart, 1)
    setTeam(updateMember)
  }, [setTeam, team])

  return (
    members.length === 0 || team.length === 0
      ? null
      : <>
        {
            show
              ? <ModalContainer>
                <Modal onSubmit={sendTeam}>
                  <ModalInput ref={inputRef} type='text' />
                  <SendTeamBtn>Send Team</SendTeamBtn>
                  <SmallText>This is going to be the team's name</SmallText>
                </Modal>
                </ModalContainer>
              : null
        }
        <PokemonTeamBar>
          {
                members.map(member => {
                  return (
                    <MemberContainer key={nanoid()}>
                      <TakeOutMember onClick={() => handleTakeOutMember(member.id)}>➖</TakeOutMember>
                      <Member src={member.front_default} alt={member.name} />
                    </MemberContainer>
                  )
                })
            }
          <BtnSend onClick={handleModal}>Send</BtnSend>
        </PokemonTeamBar>
      </>
  )
}

export default PokemonTeam
