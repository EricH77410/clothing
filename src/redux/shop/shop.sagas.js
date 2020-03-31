import { takeLatest, call, put, all } from 'redux-saga/effects'
import { firestore, convertCollectionSnapshotToMap } from '../../firebase/firebase.utils'

import {
  fetchCollectionsSuccess,
  fetchCollectionFailure
} from './shop.actions'

import ShopTypes from './shop.types'

export function* fetchCollectionsAsync() {
  yield console.log('saga fetchStart')

  try {
    const collectionRef = firestore.collection('collections')
    const snapshot = yield collectionRef.get()
    const collectionsMap = yield call(convertCollectionSnapshotToMap, snapshot)
    yield put(fetchCollectionsSuccess(collectionsMap))
  } catch(error) {
    yield put(fetchCollectionFailure(error.message))

  }
}

export function* fetchCollectionStart() {
  yield takeLatest(
    ShopTypes.FETCH_COLLECTIONS_START,
    fetchCollectionsAsync
 )
}

export function* shopSagas(){
  yield all([call(fetchCollectionStart)])
}