import * as settings from 'electron-settings'
import { FSA } from 'flux-standard-action'

const initialState: State.Auth = {
  key: null,
  remember: null
}

const loadedState = { ...initialState, ...settings.getSync('auth') }

export function auth(state = loadedState, action: FSA<any, any>) {
  switch (action.type) {
    // case 'GET_SETTINGS_AUTH_SUCCESS':
    //   return { ...state, ...action.payload }
    // case 'GET_SETTINGS_AUTH_FAILURE':

    default:
      return state
  }
}