import { BrowserWindow } from 'electron'
import * as url from 'url'
import * as path from 'path'
import { isEnvDev } from '../utils/env'

const MWT_HEIGHT = 22

export const APP_SCREEN = 'app'
export const LOGIN_SCREEN = 'login'
export const SETTINGS_SCREEN = 'settings'
export const ABOUT_SCREEN = 'about'

interface IScreenStore {
  [name: string]: Electron.BrowserWindow
}

const screenConfigs = {
  [APP_SCREEN]: {},
  [LOGIN_SCREEN]: {
    width: 600,
    height: 517 + MWT_HEIGHT,
    resizable: false,
    maximizable: false,
    fullscreenable: false
  },
  [SETTINGS_SCREEN]: {},
  [ABOUT_SCREEN]: {}
}

const screens: IScreenStore = {}

const getUrlConfig = (name) => url.format({
  protocol: 'file',
  slashes: true,
  pathname: path.join(global.projectDir, 'index.html'),
  hash: name
})

export const create = (name: string) => {
  const config = screenConfigs[name]
  screens[name] = new BrowserWindow(config)
  screens[name].loadURL(getUrlConfig(name))
  if (isEnvDev()) screens[name].webContents.openDevTools()
}

export const show = (name: string) => {
  screens[name].show()
}

export const hide = (name: string) => {
  screens[name].hide()
}

export const close = (name: string) => {
  screens[name].on('closed', () => { delete screens[name] })
  screens[name].close()
}

export const isEmpty = () => screens.length === 0
