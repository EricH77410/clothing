import CartActionTypes from './cart.types'
import { addItemToCart, removeItemfromCart, removeOneItem } from './cart.utils'

const INTIAL_STATE = {
  hidden: true,
  cartItems: []
}

const cartReducer = (state = INTIAL_STATE, action) => {
  switch(action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      }
    case CartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload)
      }
    case CartActionTypes.REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeItemfromCart(state.cartItems, action.payload)
      }
    case CartActionTypes.DECREASE_QTY:
      return {
        ...state,
        cartItems: removeOneItem(state.cartItems, action.payload)
      }
    default:
      return state
  }
}

export default cartReducer