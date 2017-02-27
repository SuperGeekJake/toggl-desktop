import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { style } from 'typestyle'

namespace Styles {
  export const html = style({
    color: 'red',
    fontFamily: 'Arial, sans-serif'
  })

  export const body = style({
    fontSize: '14px'
  })
}

ReactDOM.render(
  <h1>Hello, world!</h1>,
  document.getElementById('root')
)