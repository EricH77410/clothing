import React, { useState} from 'react'
import { connect } from 'react-redux'
import FormInput from '../form-input/form-input'
import CustomButton from '../custom-button/custom-button'
import { signUpStart } from '../../redux/user/user.actions'
//import { auth, createUserProfileDocument } from '../../firebase/firebase.utils'

import './sign-up.style.scss'

const SignUp =({ signUp }) => {
  const [userCredentials, setCredentials] = useState({
    displayName:'',
    email:'',
    password:'',
    confirmPassword:''
  })

  const { displayName, email, password, confirmPassword } = userCredentials

  const handleSubmit = async evt => {
    evt.preventDefault()

    if (password !== confirmPassword) {
      alert("Passwords don't match!")
      return
    }

    signUp({email, password, displayName})
  }

  const handleChange = evt => {
    const { name, value } = evt.target

    setCredentials({ ...userCredentials, [name]: value })
  }
    
    return (
      <div className="sign-up">
        <h2 className="title">I do not have an account</h2>
        <span>Sign up with your email and password</span>

        <form className="sign-up-form" onSubmit={handleSubmit}>
          <FormInput
            type='text'
            name='displayName'
            value={displayName}
            onChange={handleChange}
            label='Display Name'
          />

          <FormInput
            type='email'
            name='email'
            value={email}
            onChange={handleChange}
            label='Email'
          />

          <FormInput
            type='password'
            name='password'
            value={password}
            onChange={handleChange}
            label='Password'
          />

          <FormInput
            type='password'
            name='confirmPassword'
            value={confirmPassword}
            onChange={handleChange}
            label='Confirm Password'
          />

          <CustomButton type="submit">SIGN UP</CustomButton>
        </form>
      </div>
    )
}

const mapDispatchToProps = dispatch => ({
  signUp: userCredentials => dispatch(signUpStart(userCredentials))
})

export default connect(null, mapDispatchToProps)(SignUp)