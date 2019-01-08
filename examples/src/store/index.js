import { createStore, combineReducers } from '../redux/index'

import counter from './reducers/counter'
import todo from './reducers/todo'

let reducer = combineReducers({
  counter,
  todo
})

let store = createStore(reducer)

export default store
