import React from 'react'
import FormInput from '../form-input/form-input'
import CustomButton from '../custom-button/custom-button'
import { signInWithGoogle } from '../../firebase/firebase.utils'

import './sign-in.style.scss'

class SignIn extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
  }

  handleSubmit = evt => {
    evt.preventDeafault()

    this.setState({ email: '', password: ''})
  }

  handleChange = evt => {
    const { value, name } = evt.target

    this.setState({ [name]: value })
  }

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput 
            name="email" 
            type="email" 
            value={this.state.email} 
            handleChange={this.handleChange}
            label="email"
            required
          />

          <FormInput 
            name="password" 
            type="password" 
            value={this.state.password} 
            handleChange={this.handleChange}
            label="password"
            required
          />

          <div className="buttons">
            <CustomButton type="submit" stylesOptions="custom-button">Sign In</CustomButton>
            <CustomButton onClick={signInWithGoogle} stylesOptions="custom-button google-sign-in">Sign In with Google</CustomButton>
          </div>
          
        </form>
      </div>
    )

  }
}

export default SignIn