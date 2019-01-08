import React from 'react'
import { render } from 'react-dom'

import Counter from './components/Counter'
import Todo from './components/Todo'

render(
  (
    <div>
      {/* <Counter></Counter> */}
      <Todo></Todo>
    </div>
  ), document.getElementById('root')
)
