import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { auth, createUserProfileDocument } from './firebase/firebase.utils'

import { setCurrentUser } from './redux/user/user.actions'
import { createStructuredSelector } from 'reselect'
import { selectCurrentUser } from './redux/user/user.selector'

import Header from './components/header/header'
import HomePage from './pages/homepage/homepage'
import ShopPage from './pages/shop/shop'
import SignInSignUp from './pages/signin-signup/signin-signup'
import CheckoutPage from './pages/checkout/checkout'

import './App.css';

class App extends React.Component {

  unsubcribeFromAuth = null

  componentDidMount() {

    const { setCurrentUser } = this.props

    this.unsubcribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          })
        })
      }
      setCurrentUser(userAuth)
    })
  }
  
  componentWillMount() {
    this.unsubcribeFromAuth = null
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/checkout' component={CheckoutPage} />
          <Route 
            exact path='/signin' 
            render={() => 
              this.props.currentUser ? (<Redirect to="/"/>)
              : <SignInSignUp />} />
        </Switch>
        
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector ({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
