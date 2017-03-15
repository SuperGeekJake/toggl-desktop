import * as settings from 'electron-settings'
import { FSA } from 'flux-standard-action'
import * as types from './types'
import { getUserData } from '../../../utils/user'

const initialState = {
  remember: true
}

const loadedState = { ...initialState, ...settings.getSync('data.user') }

export const user = (state = loadedState, action: FSA<any, any>) => {
  switch (action.type) {
    case types.USER_AUTH_SUCCESS:
    case types.USER_FETCH_SUCCESS:
      return { ...state, ...getUserData(action.payload) }

    case types.USER_AUTH_ERROR:
    case types.USER_FETCH_ERROR:
      // TODO: Handle error cases
      return state

    case types.USER_AUTH:
    case types.USER_FETCH:
    default:
      return state
  }
}
