import * as React from 'react'
import { Component, PropTypes, ReactElement } from 'react'
import { style, cssRule } from 'typestyle'

namespace Styles {
  export const title = style({
    color: '#777',
    fontSize: '2em',
    fontWeight: 'normal'
  })
}

class AppContainer extends Component<null, null> {
  render () {
    return (
      <h1 className={Styles.title}>App Screen</h1>
    )
  }
}

export default AppContainer