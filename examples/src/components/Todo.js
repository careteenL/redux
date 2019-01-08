import React, { Component } from 'react'

import store from '../store/index'
import * as actions from '../store/actions/todo'

export default class Todo extends Component {
  state ={
    list: store.getState().list
  }
  componentDidMount () {
    store.subscribe(_ => {
      this.setState({
        list: store.getState().list
      })
    })
  }
  handleAddTodo = () => {
    store.dispatch(actions.addTodo(this.input.value))
    this.input.value = ''
  }
  render() {
    return (
      <div>
        <input type="text" ref={ dom => this.input = dom } />
        <button onClick={ this.handleAddTodo } >添加</button>
        <ul>
          { this.state.list.map((todo, key) => {
            return (
              <li key={ key } >{ todo }</li>
            )
          }) }
        </ul>
      </div>
    )
  }
}
