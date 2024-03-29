import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import './collection-overview.style.scss'

import { selectCollectionForPreview } from '../../redux/shop/shop.selector'
import CollectionPreview from '../collection-preview/collection-preview'

const CollectionOverview = ({ collections }) => (
  
  <div className="collection-overview">
    {
      collections.map(({ id, ...otherProps }) => (
        <CollectionPreview key={id} {...otherProps} />
      ))
    }
  </div>
)

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionForPreview
})

export default connect(mapStateToProps)(CollectionOverview)