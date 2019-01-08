import * as Types from '../action-types'

//  数据初始化
let initState = {
  number: 1
}

/**
 * 仓库管理员
 * @param {Object} state 
 * @param {Object} action 
 */ 
export default function reducer (state = initState, action) {
  // 对 dispatch 的参数约定 { type: 'xxx', data: 'yyy' }
  switch (action.type) {
    case Types.ADD:
      return { number: state.number + action.count }
    case Types.MINUS: 
      return { number: state.number - action.count }
    default:
      return state
  }
}
