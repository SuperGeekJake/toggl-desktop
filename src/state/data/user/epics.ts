import * as types from './types'
import { fetchSuccess, fetchError } from './actions'

const userFetchHandlers = {
  next: fetchSuccess,
  error: fetchError
}

export const userAuthEpic = (action$, store, { api }) =>
  action$.ofType(types.USER_AUTH)
    .mergeMap(({ payload }) =>
      api.authenticate(payload)
        .map(userFetchHandlers)
    )

export const userFetchEpic = (action$, store, { api }) =>
  action$.ofType(types.USER_FETCH)
    .mergeMap(action =>
      api.getUserData(store.getState())
        .map(userFetchHandlers)
    )
