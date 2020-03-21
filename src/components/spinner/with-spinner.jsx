import React from 'react'
import { SpinnerContainer, SpinnerOverlay } from './with-spiner.style'

const WithSpinner = WrappedComponent => {
  const Spinner = ({ isLoading, ...otherProps }) => {
  return isLoading ? (
    <SpinnerOverlay>
      <SpinnerContainer />
    </SpinnerOverlay>
    ) : (
      <WrappedComponent { ...otherProps } />
    )
  }

  return Spinner
}

export default WithSpinner