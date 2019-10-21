import React, { Component } from 'react'
import './App.css'
import NavBar from './components/views/home/NavBar.js'

class App extends Component {
  render () {
    return (
    <div>
        <NavBar />
        <div>{this.props.children}</div>
     </div>
        )
  }
}

export default App
