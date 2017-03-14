import * as settings from 'electron-settings'
import { FSA } from 'flux-standard-action'
import * as types from './types'

const initialState = { ...settings.getSync('user') }

export const user = (state = initialState, action: FSA<any, any>) => {
  switch (action.type) {
    case types.USER_FETCH_SUCCESS:
      return { ...state, ...action.payload }

    case types.USER_FETCH_ERROR:
      console.log('LOG IN ATTEMPT FAILED')
      return state

    case types.USER_FETCH:
    case types.USER_AUTH:
    default:
      return state
  }
}
