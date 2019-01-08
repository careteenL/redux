import React, { Component } from 'react'

export default class Todo extends Component {
  state ={
    list: []
  }
  handleAddTodo = () => {
    this.setState({
      list: [this.input.value, ...this.state.list]
    })
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
