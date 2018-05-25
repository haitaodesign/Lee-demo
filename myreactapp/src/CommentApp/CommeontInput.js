import React, { Component } from 'react'
import PropTypes from 'prop-types';
import './commentinput.css'
class ComponentInput extends Component{
    static propTypes = {
        onSubmit: PropTypes.func
    }
    constructor(){
        super()
        this.state={
            username:'',
            content:''
        }
    }
    componentWillMount () {
        this._loadUserName()
    }
    componentDidMount(){
        this.textarea.focus()
    }
    handleUserNameClick(e){
        this.setState({
            username:e.target.value
        })
    }
    _loadUserName () {
        const username = localStorage.getItem('username')
        if(username){
            this.setState({ username })
        }
    }
    _saveUsername (username) {
        localStorage.setItem('username', username)
    }
    handleUserNameBlur(e){
        this._saveUsername(e.target.value)
    }
    handleContentClick(e){
        this.setState({
            content:e.target.value
        })
    }
    handleSubmit(){
        if(this.props.onSubmit){
            const {username,content} = this.state
            this.props.onSubmit({
                username,
                content,
                createdTime: +new Date()
            })
        }
        this.setState({content:''})
    }
    render(){
        return(
            <div className="comment-input clearfix">
                <div className="comment-field clearfix">
                    <span className="comment-field-name">用户名：</span>
                    <div className="comment-field-input">
                        <input value={this.state.username} 
                                onChange={this.handleUserNameClick.bind(this)}
                                onBlur={this.handleUserNameBlur.bind(this)}/>
                    </div>
                </div>
                <div className="comment-field clearfix">
                    <span className="comment-field-name">评论内容：</span>
                    <div className="comment-field-input">
                        <textarea ref={(textarea)=>this.textarea = textarea} 
                                    value={this.state.content} 
                                    onChange={this.handleContentClick.bind(this)}
                                    />
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
