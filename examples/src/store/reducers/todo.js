import * as Types from '../action-types'

const initialState = {
  list: []
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case Types.ADD_TODO:
      return { list: [payload, ...state.list] }
    default:
      return state
  }
}
