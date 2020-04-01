import React, { useState } from 'react'
import { connect } from 'react-redux'
import FormInput from '../form-input/form-input'
import CustomButton from '../custom-button/custom-button'
import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions'

import './sign-in.style.scss'

const SignIn = ({emailSignInStart, googleSignInStart}) => {

  const [userCredentials, setCredentials] = useState({ email:'', password:'' })
  
  const { email, password } = userCredentials

  const handleSubmit = async evt => {
    evt.preventDefault()    

    emailSignInStart(email, password)
  }

  const handleChange = evt => {
    const { value, name } = evt.target

    setCredentials({ ...userCredentials, [name]: value })
  }
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={handleSubmit}>
          <FormInput 
            name="email" 
            type="email" 
            value={userCredentials.email} 
            handleChange={handleChange}
            label="email"
            required
          />

          <FormInput 
            name="password" 
            type="password" 
            value={userCredentials.password} 
            handleChange={handleChange}
            label="password"
            required
          />

          <div className="buttons">
            <CustomButton type="submit" >Sign In</CustomButton>
            <CustomButton
              type="button" 
              onClick={googleSignInStart} 
              stylesOptions="google-sign-in"
            >
              Sign In with Google
            </CustomButton>
          </div>
          
        </form>
      </div>
    )
}

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) => dispatch(emailSignInStart({email, password}))
})

export default connect(null,mapDispatchToProps)(SignIn)