import React, { Component } from 'react'
import Comment from './Comment'
import PropTypes from 'prop-types';
class ComponentList extends Component{
    static propTypes = {
        comments: PropTypes.array
    }
    render(){
        return(
            <div>
                {this.props.comments.map((comment,i)=><Comment comment={comment} key={i}/>)}
            </div>
        )
    }
}

export default ComponentList
