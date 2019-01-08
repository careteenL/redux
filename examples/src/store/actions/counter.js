/**
 * 多封装一层，具体页面无需再次引入 Types
 */ 

import * as Types from '../action-types'

export function add (n) {
  return { type: Types.ADD, count: n }
}
export function minus (n) {
  return { type: Types.MINUS, count: n }
}