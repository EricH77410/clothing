import ShopTypes from './shop.types'
import { firestore, convertCollectionSnapshotToMap } from '../../firebase/firebase.utils'

export const fetchCollectionStart = () => ({
  type: ShopTypes.FETCH_COLLECTIONS_START
})

export const fetchCollectionsSuccess = (data) =>({
  type: ShopTypes.FETCH_COLLECTION_SUCCESS,
  payload: data
})

export const fetchCollectionFailure = errMsg => ({
  type: ShopTypes.FETCH_COLLECTION_FAILURE,
  payload: errMsg
})

export const fetchCollectionStartAsync = () => {
  return dispatch => {
    const collectionRef = firestore.collection('collections')
    dispatch(fetchCollectionStart())

    collectionRef
      .get()
      .then(snapshot => {
      const collectionsMap = convertCollectionSnapshotToMap(snapshot)
      dispatch(fetchCollectionsSuccess(collectionsMap))
    })
    .catch(err => dispatch(fetchCollectionFailure(err.message))) 
  }
}