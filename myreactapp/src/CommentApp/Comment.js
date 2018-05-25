import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './index.css'
class Comment extends Component {
  static propTypes = {
    comment: PropTypes.object.isRequired
  }
  render () {
    const comment = this.props.comment
    return (
      <div className='comment'>
        <div className='comment-user'>
          <span>{comment.username} :</span>
        </div>
        <p>{comment.content}</p>
      </div>
    )
  }
}

export default Comment