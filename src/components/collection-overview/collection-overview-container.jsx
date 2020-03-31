import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { compose } from 'redux'

import { selectIsCollectionFectching } from '../../redux/shop/shop.selector'
import WithSpinner from '../spinner/with-spinner'
import CollectionOverview from './collection-overview'


const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionFectching
})

const CollectionOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionOverview)

export default CollectionOverviewContainer


