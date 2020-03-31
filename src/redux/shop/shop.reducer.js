import ShopTypes from './shop.types'

const INITIAL_STATE = {
  collections: null,
  isFetching: false,
  errorMessage: undefined
}

const shopReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case ShopTypes.FETCH_COLLECTIONS_START:
      return {
        ...state,
        isFetching: true
      }
    case ShopTypes.FETCH_COLLECTION_SUCCESS:
      return {
        ...state,
        isFetching: false,
        collections: action.payload
      }
    case ShopTypes.FETCH_COLLECTION_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload
      }
    case ShopTypes.UPDATE_COLLECTIONS:
      return {
        ...state,
        collections: action.payload
      }
    default:
      return state
  }
}

export default shopReducer