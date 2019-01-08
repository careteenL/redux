import { createStore } from '../redux/index'

import counter from './reducers/counter'
import todo from './reducers/todo'

let store = createStore(todo)

export default store
