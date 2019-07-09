import React, { Component } from 'react'

export default class Counter extends Component {
  constructor () {
    super()
    this.state = {
      count: 0
    }
  }

  makeIncrementer = amount => () =>
    this.setState(previousState => ({ count: previousState.count + amount }))

  increment = this.makeIncrementer(1)
  decrement = this.makeIncrementer(-1)

  render () {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button className='increment' onClick={this.increment}>
          Increment
        </button>
        <button className='decrement' onClick={this.decrement}>
          Decrement
        </button>
      </div>
    )
  }
}
