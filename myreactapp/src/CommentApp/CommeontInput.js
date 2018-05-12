import React, { Component } from 'react'
import './commentinput.css'
class ComponentInput extends Component{
    constructor(){
        super()
        this.state={
            username:'',
            content:''
        }
    }
    handleUserNameClick(e){
        this.setState({
            username:e.target.value
        })
    }
    handleContentClick(e){
        this.setState({
            content:e.target.value
        })
    }
    handleSubmit(){
        if(this.props.onSubmit){
            const {username,content} = this.state
            this.props.onSubmit({username,content})
        }
        this.setState({content:''})
    }
    render(){
        return(
            <div className="comment-input clearfix">
                <div className="comment-field clearfix">
                    <span className="comment-field-name">用户名：</span>
                    <div className="comment-field-input">
                        <input value={this.state.username} onChange={this.handleUserNameClick.bind(this)}/>
                    </div>
                </div>
                <div className="comment-field clearfix">
                    <span className="comment-field-name">评论内容：</span>
                    <div className="comment-field-input">
                        <textarea value={this.state.content} onChange={this.handleContentClick.bind(this)}/>
                    </div>
                </div>
                <div className="comment-field-button">
                    <button onClick={this.handleSubmit.bind(this)}>发布</button>
                </div>
            </div>
        )
    }
}

export default ComponentInput
