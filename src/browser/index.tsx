require('../common/require')()

import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { cssRule } from 'typestyle'
import * as screens from 'common/screens'

// import LoginContainer from './login'

namespace GlobalStyles {
  /** Use full window size for application */
  cssRule('html, body', {
    height: '100vh',
    width: '100vw',
    padding: 0,
    margin: 0
  });

  /** Use border box */
  cssRule('html', {
    boxSizing: 'border-box'
  });

  cssRule('body', {
    color: '#333',
    fontSize: '14px',
    fontFamily: 'Arial, sans-serif'
  })

  cssRule('*, *:before, *:after', {
    boxSizing: 'inherit'
  });

  /** Also root should fill parent */
  cssRule('#root', {
    width: '100vw',
    height: '100vh'
  });

  cssRule('*', {
    cursor: 'default',
    '-webkit-user-select': 'none'
  })

  // Forms
  cssRule('input, textarea', {
    '-webkit-user-select': 'text'
  })

  cssRule('form, input, optgroup, select, textarea', {
    '-webkit-user-select': 'text',
    '-webkit-app-region':  'no-drag'
  })
}

export function bootstrap (hash: string) {
  const screenName = hash.substring(1)

  let screenModule: any
  switch (screenName) {
    case screens.APP_SCREEN:
      screenModule = require('./components/app')
      break
    case screens.LOGIN_SCREEN:
      screenModule = require('./components/login')
      break
    case screens.SETTINGS_SCREEN:
      screenModule = require('./components/settings')
      break
    case screens.ABOUT_SCREEN:
      screenModule = require('./components/about')
      break
    default:
      throw new Error(`Unknown window name given: ${screenName}`)
  }

  if (!screenModule.default) throw new Error('Screen component missing default export')
  const rootComponent = screenModule.default
  ReactDOM.render(
    React.createElement(rootComponent),
    document.getElementById('root')
  )
}
