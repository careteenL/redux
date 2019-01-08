import React, { Component } from 'react'
import { bindActionCreators } from 'redux'

let { Provider, Consumer } = React.createContext()

/**
 * 提供父组件
 */ 
class Provider extends Component {
  render() {
    return (
      <Provider value={ this.props.store } >
        { this.props.children }
      </Provider>
    )
  }
}

/**
 * 对子组件代理
 * @param {*} mapStateToProps 
 * @param {*} mapDispatchToProps 
 */ 
const connect = (mapStateToProps, mapDispatchToProps) => {
  return () => {
    class Proxy extends Component {
      state = this.props.store.getState()
      componentDidMount () {
        this.unsub = this.props.store.subscribe(_ => {
          this.setState(this.props.store.getState())
        })
      }
      componentWillUnmount () {
        this.unsub()
      }
      render () {
        let actions
        if ( typeof mapDispatchToProps === 'function' ) { // 函数则自定义
          actions = mapDispatchToProps(this.props.store.dispatch)
        } else { // actions 对象则对其处理
          actions = bindActionCreators(mapDispatchToProps, this.props.store.dispatch)
        }
        return (
          <Component
            { ...mapStateToProps(this.state) }
            { ...actions }
          >
          </Component>
        )
      }
    }

    return (
      <Consumer>
        {
          store => {
            return <Proxy store={ store } ></Proxy>
          }
        }
      </Consumer>
    )
  }
}

export {
  Provider,
  connect
}
