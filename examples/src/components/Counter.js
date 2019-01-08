import React, { Component } from 'react'

import store from '../store/index'
import * as actions from '../store/actions/counter'

export default class Counter extends Component {
  state = {
    result: store.getState().counter.number
  }
  componentDidMount () {    
    this.unsub = store.subscribe(_ => {
      this.setState({
        result: store.getState().counter.number
      })
    })
  }
  handleAdd = () => {
    store.dispatch(actions.add(3))
  }
  handleMinus = () => {
    store.dispatch(actions.minus(2))
  }
  render() {
    return (
      <div>
        <button onClick={ this.handleAdd } >+</button>
        <button onClick={ this.handleMinus } >-</button>
        <p>{ this.state.result }</p>
      </div>
    )
  }
}
