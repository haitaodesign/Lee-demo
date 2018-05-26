import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from './react-redux'

class Header extends Component {
    static propTypes = {
        themeColor: PropTypes.string
    }
    // static contextTypes = {
    //     store: PropTypes.object
    // }
    // constructor(){
    //     super()
    //     this.state = { themeColor: '' }
    // }

    // componentWillMount(){
    //     const { store } = this.context
    //     this._upadteThemeColor()
    //     store.subscribe(() => this._upadteThemeColor())
    // }
    // _upadteThemeColor () {
    //     const { store } = this.context
    //     const state = store.getState()
    //     this.setState({ themeColor: state.themeColor })
    // }
    render() {
        return (
            <h1 style={{ color: this.props.themeColor }}>React.js 小书</h1>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        themeColor: state.themeColor
    }
}

Header = connect(mapStateToProps)(Header)

export default Header