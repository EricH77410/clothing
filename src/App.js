import React from 'react';
import { Switch, Route } from 'react-router-dom'

import { auth } from './firebase/firebase.utils'

import Header from './components/header/header'
import HomePage from './pages/homepage/homepage'
import ShopPage from './pages/shop/shop'
import SignInSignUp from './pages/signin-signup/signin-signup'

import './App.css';

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      currentUser: null
    }
  }

  unsubcribeFromAuth = null

  componentDidMount() {
    this.unsubcribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user })
      console.log(user)
    })
  }
  
  componentWillMount() {
    this.unsubcribeFromAuth = null
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInSignUp} />
        </Switch>
        
      </div>
    );
  }
}

export default App;
