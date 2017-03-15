import { combineEpics } from 'redux-observable'
import { combineReducers } from 'redux'

import {
  user,
  userAuthEpic,
  userFetchEpic,
  connectivity,
  workspaces
} from './data'

export const rootEpic = combineEpics(
  userAuthEpic,
  userFetchEpic
)

export const rootReducer = combineReducers({
  data: combineReducers({
    connectivity,
    user,
    workspaces
  })
})
