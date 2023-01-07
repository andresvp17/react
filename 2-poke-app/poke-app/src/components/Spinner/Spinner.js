import React from 'react'
import { Spinner, SpinnerContainer, SingleSpinner } from './styles'

const SpinnerLoading = () => {
  return (
    <SpinnerContainer>
      <Spinner />
    </SpinnerContainer>
  )
}

export const SpinnerLoadingSingle = () => {
  return (
    <SpinnerContainer>
      <SingleSpinner />
    </SpinnerContainer>
  )
}

export default SpinnerLoading
