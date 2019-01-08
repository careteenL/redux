import { createStore } from '../redux/index'

import counter from './reducers/counter'

let store = createStore(counter)

export default store
