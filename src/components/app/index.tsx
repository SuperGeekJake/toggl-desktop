import * as React from 'react'
import { PureComponent } from 'react'
import { style } from 'typestyle'

export const title = style({
  color: '#777',
  fontSize: '2em',
  fontWeight: 'normal'
})

class AppContainer extends PureComponent<null, null> {
  render () {
    return (
      <h1 className={title}>App Screen</h1>
    )
  }
}

export default AppContainer
