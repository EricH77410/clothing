import React from 'react'
import { auth } from '../../firebase/firebase.utils'
import { createStructuredSelector } from 'reselect'
import { ReactComponent as Logo } from '../../assets/crown.svg'
import { connect } from 'react-redux'

import { selectCartHidden } from '../../redux/cart/cart.selectors'
import { selectCurrentUser } from '../../redux/user/user.selector'

import CartIcon from '../cart-icon/cart-icon'
import CartDropdown from '../cart/cart-dropdown'

import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink } from './header.styled'

const Header = ({ currentUser, hidden }) => (
  
  <HeaderContainer>
    <LogoContainer to="/">
      <Logo className="logo"/>
    </LogoContainer>

    <OptionsContainer>
      <OptionLink to="/shop">SHOP</OptionLink>
      <OptionLink to="/shop">CONTACT</OptionLink>
      {
        currentUser ?
          <OptionLink as="div" onClick={() => auth.signOut()}>SIGN OUT</OptionLink>        
        : <OptionLink to='/signin'>SIGN IN</OptionLink>
      }
      <CartIcon />
    </OptionsContainer>

    {
      hidden ? null : <CartDropdown />
    }
    
  </HeaderContainer>
)

const mapStateToProps = createStructuredSelector ({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header)