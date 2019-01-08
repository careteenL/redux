/**
 * redux 核心逻辑
 * @param {Function} reducer 仓库初始化时需要分配管理员
 */ 
let createStore = (reducer) => {
  let state
  let getState = () => state
  let listeners = []
  let dispatch = (action) => {
    state = reducer(state, action)
    listeners.forEach(fn => fn())
  }
  dispatch({})
  let subscribe = (fn) => {
    listeners.push(fn)
    return () => {
      listeners = listeners.filter(f => f !== fn)
    }
  }
  return {
    // 获取数据，由具体的reducer提供数据
    getState, 
    // 派发任务，由仓库管理员reducer具体执行
    dispatch, 
    // 发布订阅模式中的订阅者，订阅的返回结果为取消订阅
    subscribe 
  }
}

/**
 * 将多个仓库管理员合并
 * @param {Object} reducers 多个仓库管理员
 */ 
let combineReducers = (reducers) => {
  // 合并以后还是一个reducer
  return (state = {}, action) => {
    for (const key in reducers) {
      if (reducers.hasOwnProperty(key)) {
        state[key] = reducers[key](state[key], action)
      }
    }
    return state
  }
}

/**
 * 配合react-redux 的 connect
 * @param {*} actions 
 * @param {*} dispatch 
 */ 
let bindActionCreators = (actions, dispatch) => {
  let ret = {}
  for (let key in actions) {
    ret[key] = (...args) => dispatch(actions[key](...args))
  }
  return ret
}

export {
  createStore, // 创建容器
  combineReducers,
  bindActionCreators
}
