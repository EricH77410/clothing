
export const addItemToCart = (cartItems, itemToAdd) => {
  const existingCartItem = cartItems.find(
    item => item.id === itemToAdd.id
  )

  if (existingCartItem) {
    return cartItems.map(item => 
      item.id === itemToAdd.id
      ? { ...item, quantity: item.quantity + 1 }
      : item
    )
  }

  return [...cartItems, { ...itemToAdd, quantity: 1}]
}

export const removeItemfromCart = (cartItems, itemToRemove) => { 
  return cartItems.filter(item => item.id !== itemToRemove.id)
}

export const removeOneItem = (cartItems, itemToRemove) => {
  const existingItem = cartItems.find(item => item.id === itemToRemove.id)

  if (existingItem.quantity === 1) {
    return cartItems.filter(item => item.id !== itemToRemove.id )
  }

  return cartItems.map(
    item => 
    item.id === itemToRemove.id ?
    {...item, quantity: item.quantity - 1}
    : item
  )

}
