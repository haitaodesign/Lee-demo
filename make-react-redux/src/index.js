import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import registerServiceWorker from './registerServiceWorker';
import Header from './Header'
import Content from './Content'

class Index extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Content/>
            </div>
        );
    }
}



ReactDOM.render(<Index />, document.getElementById('root'));
// registerServiceWorker();
