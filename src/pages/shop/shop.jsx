import React from 'react'
import { Route } from 'react-router-dom'

import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCollections } from '../../redux/shop/shop.selector'
import { updateCollections } from '../../redux/shop/shop.actions'

import CollectionOverview from '../../components/collection-overview/collection-overview'
import CollectionPage from '../collection/collection-page'
import WithSpinner from '../../components/spinner/with-spinner'

import { firestore, convertCollectionSnapshotToMap } from '../../firebase/firebase.utils'

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview)
const CollectionPageWithSpinner = WithSpinner(CollectionPage)

class ShopPage extends React.Component {
  state = {
    loading: true
  }

  unsubscribeFromSanpshot = null

  componentDidMount() {
    const { updateCollections } = this.props
    const collectionRef = firestore.collection('collections')

    collectionRef.get().then(snapshot => {
      const collectionsMap = convertCollectionSnapshotToMap(snapshot)
      updateCollections(collectionsMap)

      this.setState({ loading: false })
    })    
  }

  componentWillUnmount() {
    this.unsubscribeFromSanpshot = null
  }

  render() {
    const { match } = this.props
    const { loading } = this.state
    return (
      <div className="shop-page">
        <Route 
          exact 
          path={`${match.path}`} 
          render={(props) => <CollectionOverviewWithSpinner isLoading={loading} {...props}/>} 
        />
        <Route 
          path={`${match.path}/:collectionId`} 
          render={(props) => <CollectionPageWithSpinner isLoading={loading} {...props}/>}
        />
      </div>
    )
  }    
} 

const mapDispatchToProps = dispatch => ({
  updateCollections: (collections) => dispatch(updateCollections(collections)) 
})

const mapStateToProps = createStructuredSelector({
  collections: selectCollections
})

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage)