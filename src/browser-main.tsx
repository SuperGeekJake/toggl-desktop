import * as React from 'react'
import * as ReactDOM from 'react-dom'
import * as injectTapEventPlugin from 'react-tap-event-plugin'
import { createStore, applyMiddleware } from 'redux'
import { forwardToMain, replayActionRenderer, getInitialStateRenderer } from 'electron-redux'
import { Provider } from 'react-redux'
import * as settings from 'electron-settings'

import { rootReducer, actions } from './state'
import { isEnvDev } from './utils/env'
import TogglTheme from './components/common/toggl-theme'
import Connectivity from './components/common/connectivity'

import './global.css'

injectTapEventPlugin()

export const bootstrap = (hash: string) => {
  const screenName = hash.substring(1)
  const ScreenComponent = require(`./components/${screenName}`).default

  const initState = getInitialStateRenderer()
  const store = createStore(rootReducer, initState, applyMiddleware(forwardToMain))
  replayActionRenderer(store)

  ReactDOM.render(
    <Provider store={store}>
      <TogglTheme>
        <div>
          <ScreenComponent />

          <Connectivity />
        </div>
      </TogglTheme>
    </Provider>,
    document.getElementById('root')
  )

  if (isEnvDev()) {
    // For development, expose redux
    // for easy manipulation in console
    window.toggl = {
      settings,
      store,
      actions
    }
  }
}
