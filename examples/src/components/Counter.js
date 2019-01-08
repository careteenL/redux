import React, { Component } from 'react'

// import store from '../store/index'
import * as actions from '../store/actions/counter'

import {
  connect
} from 'react-redux'

class Counter extends Component {
  // state = {
  //   result: store.getState().counter.number
  // }
  // componentDidMount () {    
  //   this.unsub = store.subscribe(_ => {
  //     this.setState({
  //       result: store.getState().counter.number
  //     })
  //   })
  // }
  handleAdd = () => {
    // store.dispatch(actions.add(3))
    this.props.add(3)
  }
  handleMinus = () => {
    // store.dispatch(actions.minus(2))
    this.props.minus(2)
  }
  render() {
    return (
      <div>
        <button onClick={ this.handleAdd } >+</button>
        <button onClick={ this.handleMinus } >-</button>
        <p>{ this.props.result }</p>
      </div>
    )
  }
}

export default connect(
  state => ({
    result: state.counter.number 
  }),
  dispatch => ({
    add: val => dispatch(actions.add(val)),
    minus: val => dispatch(actions.minus(val))
  })
)(Counter)
