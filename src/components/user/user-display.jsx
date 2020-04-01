import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCurrentUser } from '../../redux/user/user.selector'

const UserDisplay = ({ user }) => (
  
  <div className="user-display">
    {user.displayName}
  </div>
)

const mapStateToProps = createStructuredSelector ({
  user: selectCurrentUser
})

export default connect(mapStateToProps)(UserDisplay)