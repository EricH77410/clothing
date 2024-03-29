import { createSelector } from 'reselect'

const selectCart = state => state.cart

export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.cartItems
)

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems => 
    cartItems.reduce(
      (accumulatedQty, item) => 
        accumulatedQty + item.quantity, 
        0
      )
)

export const selectCartHidden = createSelector(
  [selectCart],
  cart => cart.hidden
)

export const selectCartTotal = createSelector(
  [selectCartItems],
  cartItems => 
    cartItems.reduce(
      (accumulatedPrice, item) => 
        accumulatedPrice + (item.price * item.quantity), 
        0
      )
)
