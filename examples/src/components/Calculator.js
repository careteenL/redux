import React, { Component } from 'react'

export default class Calculator extends Component {
  first = React.createRef()
  second = React.createRef()
  state = {
    result: 0
  }  
  handleAdddition = () => {
    let result = (+this.first.current.value || 0) + (+this.second.current.value || 0)
    this.setState({
      result: result
    })
  }
  handleSubtraction = () => {
    let result = (+this.first.current.value || 0) - (+this.second.current.value || 0)
    this.setState({
      result: result
    })
  }
  handleMultiplication = () => {
    let result = (+this.first.current.value || 0) * (+this.second.current.value || 0)
    this.setState({
      result: result
    })
  }
  handleDivision = () => {
    let result = (+this.first.current.value || 0) / (+this.second.current.value || 0)
    this.setState({
      result: result
    })
  }  
  render() {
    return (
      <div>
        <input type="text" ref={ this.first } />
        <input type="text" ref={ this.second } />
        <button onClick={ this.handleAdddition } >加</button>
        <button onClick={ this.handleSubtraction } >减</button>
        <button onClick={ this.handleMultiplication } >乘</button>
        <button onClick={ this.handleDivision } >除</button>
        <br/>
        <p>{ this.state.result }</p>
      </div>
    )
  }
}
