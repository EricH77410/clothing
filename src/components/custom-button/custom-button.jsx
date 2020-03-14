import React from 'react'
import './custom-button.style.scss'

const CustomButton = ({ children, stylesOptions, ...otherProps}) => (
  <button className={`${stylesOptions}`} {...otherProps}>
    {children}
  </button>
)

export default CustomButton
