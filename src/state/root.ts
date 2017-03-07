import { combineEpics } from 'redux-observable'
import { combineReducers } from 'redux'

import { auth, authInitEpic } from './auth'
import { connectivity } from './connectivity'

export const rootEpic = combineEpics(
  authInitEpic
)

export const rootReducer = combineReducers({
  auth, connectivity
})
