global.perfStartTime = Date.now()
process.env.TOGGL_ENV = process.env.NODE_ENV || 'DEV'

import 'rxjs/Rx'
import { app, BrowserWindow } from 'electron'
import * as path from 'path'
import * as url from 'url'
import { createStore, applyMiddleware } from 'redux'
import { forwardToRenderer, triggerAlias, replayActionMain } from 'electron-redux'
import { createEpicMiddleware } from 'redux-observable'
import * as createNodeLogger from 'redux-node-logger'
import * as settings from 'electron-settings'

import { rootReducer, rootEpic } from './state'
import * as screens from './libs/screens'
import appDefaults from './libs/defaults'
import Socket from './libs/socket'

const MWT_HEIGHT = 22

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let win, socket

function createWindow() {
  // Create the browser window.
  win = new BrowserWindow({
    width: 600,
    height: 517 + MWT_HEIGHT,
    resizable: false,
    maximizable: false,
    fullscreenable: false
  })

  // and load the index.html of the app.
  win.loadURL(url.format({
    protocol: 'file',
    slashes: true,
    pathname: path.join(__dirname, 'index.html'),
    hash: screens.LOGIN_SCREEN
  }))

  // Open the DevTools.
  win.webContents.openDevTools()

  // Emitted when the window is closed.
  win.on('closed', () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    win = null
  })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', () => {
  global.perfAppReady = Date.now()
  process.env.LOCALE = 'en'
  settings.defaults(appDefaults)

  const logger = createNodeLogger()
  const middleware = applyMiddleware(
    triggerAlias,
    createEpicMiddleware(rootEpic),
    forwardToRenderer,
    logger
  )

  const store = createStore(rootReducer, middleware)
  replayActionMain(store)

  socket = new Socket(store)
  store.dispatch({ type: 'APP_INIT' })

  createWindow()
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
  if (win === null) {
    createWindow()
  }
})
