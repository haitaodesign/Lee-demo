import React, { Component } from 'react'
import Comment from './Comment'
class ComponentList extends Component{
    static defautProps={
        comments:[]
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
