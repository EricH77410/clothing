import React from 'react'
import { connect } from 'react-redux'
import CollectionItem from '../../components/collection-item/collection-item'
import './collection-page.style.scss'
// import { firestore } from '../../firebase/firebase.utils'

import { selectCollection } from '../../redux/shop/shop.selector'

const CollectionPage = ({ collection }) => {

  // clean up function (componentWillUnmout like)
  // useEffect( () => {
  //   console.log('Je souscris!')
  //   const unsubscribeFromCollections = firestore.collection('collections').onSnapshot( snap => console.log(snap) )
  //   return () => {
  //     console.log('je ne souscris plus!')
  //     unsubscribeFromCollections()
  //   }
  // },[])

  const { title, items } = collection
  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {
          items.map( item => <CollectionItem key={item.id} item={item} />)
        }
      </div>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage)
