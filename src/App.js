import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCurrentUser } from './redux/user/user.selector'
import { checkUserSession } from './redux/user/user.actions'
import Header from './components/header/header'
import HomePage from './pages/homepage/homepage'
import ShopPage from './pages/shop/shop'
import SignInSignUp from './pages/signin-signup/signin-signup'
import CheckoutPage from './pages/checkout/checkout'


import './App.css';

class App extends React.Component {

  unsubcribeFromAuth = null
  
  componentWillUnmount() {
    this.unsubcribeFromAuth = null
  }

  componentDidMount() {
    const { checkUserSession } = this.props
    checkUserSession()
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
  checkUserSession: () => dispatch(checkUserSession())
})


export default connect(mapStateToProps, mapDispatchToProps)(App);
