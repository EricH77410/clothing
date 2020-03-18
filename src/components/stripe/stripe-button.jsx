import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripCkeckoutButton = ({ price }) => {
  const priceForStripe = price * 100
  const publicKey = 'pk_test_TICKZctltpsHwGDHOn6R2QD000qNUPLKmr'

  const onToken = token => {
    console.log(token)
    alert('Payment successful!')
  }

  return (
    <StripeCheckout
      label="Pay Now"
      name="Clothing"
      billingAddress
      shippingAddress 
      currency="EUR"
      image="https://svgshare.com/i/CUz.svg"
      description={`Yout total is ${price} €`}
      amount={priceForStripe}
      panelLabel="Pay now"
      token={onToken}
      stripeKey={publicKey}
    />
  )
}

export default StripCkeckoutButton
