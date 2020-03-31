import React from 'react'
import { connect } from 'react-redux'
import FormInput from '../form-input/form-input'
import CustomButton from '../custom-button/custom-button'
import { signUpStart } from '../../redux/user/user.actions'
//import { auth, createUserProfileDocument } from '../../firebase/firebase.utils'

import './sign-up.style.scss'

class SignUp extends React.Component {
  constructor() {
    super()

    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  }

  handleSubmit = async evt => {
    evt.preventDefault()
    const { signUp } = this.props
    const { displayName, email, password, confirmPassword } = this.state

    if (password !== confirmPassword) {
      alert("Passwords don't match!")
      return
    }

    signUp({email, password, displayName})
  }

  handleChange = evt => {
    const { name, value } = evt.target

    this.setState({ [name]: value })
  }

  render() {
    const { displayName, email, password, confirmPassword } = this.state
    return (
      <div className="sign-up">
        <h2 className="title">I do not have an account</h2>
        <span>Sign up with your email and password</span>

        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            type='text'
            name='displayName'
            value={displayName}
            onChange={this.handleChange}
            label='Display Name'
          />

          <FormInput
            type='email'
            name='email'
            value={email}
            onChange={this.handleChange}
            label='Email'
          />

          <FormInput
            type='password'
            name='password'
            value={password}
            onChange={this.handleChange}
            label='Password'
          />

          <FormInput
            type='password'
            name='confirmPassword'
            value={confirmPassword}
            onChange={this.handleChange}
            label='Confirm Password'
          />

          <CustomButton type="submit">SIGN UP</CustomButton>
        </form>
      </div>
    )
  }

}

const mapDispatchToProps = dispatch => ({
  signUp: userCredentials => dispatch(signUpStart(userCredentials))
})

export default connect(null, mapDispatchToProps)(SignUp)