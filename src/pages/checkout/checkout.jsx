import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors'
import { emptyCart } from '../../redux/cart/cart.actions'

import CheckoutItem from '../../components/chekout-item/checkout-item'
import StripCkeckoutButton from '../../components/stripe/stripe-button'
import CustomButton from '../../components/custom-button/custom-button'

import './checkout.style.scss'

const CheckoutPage = ({ cartItems, total, emptyCart }) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-block">
        <span>Product</span>
      </div>
      <div className="header-block">
        <span>Description</span>
      </div>
      <div className="header-block">
        <span>Quantity</span>
      </div>
      <div className="header-block">
        <span>Price</span>
      </div>
      <div className="header-block">
        <span>Remove</span>
      </div>
    </div>

    {
      cartItems.map( item => <CheckoutItem key={item.id} cartItem={item}/> )
    }

    <div className="total">
      <CustomButton 
        stylesOptions="btn-clear-cart"
        onClick={()=>emptyCart()}
      >
        Clear Cart
      </CustomButton>
      <div>TOTAL: ${total} €</div>
    </div>
    <div className="test-warning">
      *Please use the following test credit card for payments*
      <br/>
      4242 4242 4242 4242 - Exp: 01/21 - CVG: 123
    </div>
    <StripCkeckoutButton price={total} />
  </div>
)

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal  
})

const mapDispatchToProps = dispatch => ({
  emptyCart: () => dispatch(emptyCart())
})

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutPage)