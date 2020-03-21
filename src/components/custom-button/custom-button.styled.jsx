import styled, { css } from 'styled-components'

const buttonStyle = css `
  background-color: #000;
  color: #fff;
  border: none;

  &:hover {
    background-color: #fff;
    color: #000;
    border: 1px solid #000;
  }
`

const buttonClearCart = css`
  margin-left: 0;
  background-color: orangered;
  margin-bottom: 2rem;
`

const invertedButton = css`
  background-color: #fff;
  color: #000;
  border: 1px solid #000;

  &:hover {
    background-color: #000;
    color: #fff;
    border: none;
  }
`

const googleSignIn = css`
  background-color: #4285f4;
  color: #fff;

  &:hover {
    background-color: #357ae8;
    border: none;
  }
`

const getButtonStyles = props => {
  if(props.stylesOptions) {
    if (props.stylesOptions==='google-sign-in'){
      return googleSignIn
    }
    if (props.stylesOptions==='inverted') {
      return invertedButton
    }
    if (props.stylesOptions==="btn-clear-cart"){
      return buttonClearCart
    }
  } else {
    return buttonStyle
  }
}

export const CustomButtonContainer = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;  
  text-transform: uppercase;
  font-family: 'Open Sans Condensed';
  font-weight: bolder;  
  cursor: pointer;
  display: flex;
  justify-content: center;

  ${getButtonStyles}
`