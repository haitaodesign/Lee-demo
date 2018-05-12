import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CommentApp from './CommentApp/CommentApp.js'

class App extends Component {
  handleClickOnTitle(e){
    console.log(e.target.innerHTML)
  }
  render() {
    const word = 'lee'
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 onClick={this.handleClickOnTitle} className="App-title">Welcome to {word}</h1>
        </header>
        <CommentApp />
      </div>
    );
  }
}

export default App;
