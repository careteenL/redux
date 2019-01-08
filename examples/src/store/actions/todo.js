import * as Types from '../action-types'
export function addTodo (val) {
  return { type: Types.ADD_TODO, payload: val }
}