global.perfStartTime = Date.now()
process.env.TOGGL_ENV = process.env.NODE_ENV || 'DEV'

global.projectDir = __dirname

import 'rxjs/Rx'
import { app } from 'electron'
import { createStore, applyMiddleware } from 'redux'
import { forwardToRenderer, triggerAlias, replayActionMain } from 'electron-redux'
import { createEpicMiddleware } from 'redux-observable'
import * as createNodeLogger from 'redux-node-logger'

import { rootReducer, rootEpic } from './state'
import * as api from './api'
import * as screens from './lib/screens'
import { LOGIN_SCREEN } from './lib/screens'
import Socket from './lib/socket'

let store
let socket

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', () => {
  global.perfAppReady = Date.now()
  process.env.LOCALE = 'en'

  const logger = createNodeLogger()
  const epicMiddleware = createEpicMiddleware(rootEpic, { dependencies: { api } })
  const middleware = applyMiddleware(
    triggerAlias,
    epicMiddleware,
    forwardToRenderer,
    logger
  )

  store = createStore(rootReducer, middleware)
  replayActionMain(store)
  store.dispatch({ type: 'APP_INIT' })

  screens.create(LOGIN_SCREEN)
  socket = new Socket(store)
})

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (screens.isEmpty()) screens.create(LOGIN_SCREEN)
})
