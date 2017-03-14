import * as settings from 'electron-settings'
import { FSA } from 'flux-standard-action'
import * as types from './types'

const initialState = {
  remember: true
}

const loadedState = { ...initialState, ...settings.getSync('data.user') }

export const user = (state = loadedState, action: FSA<any, any>) => {
  switch (action.type) {
    case types.USER_FETCH_SUCCESS:
      return { ...state, ...action.payload }

    case types.USER_FETCH_ERROR:
      return state

    case types.USER_FETCH:
    case types.USER_AUTH:
    default:
      return state
  }
}
