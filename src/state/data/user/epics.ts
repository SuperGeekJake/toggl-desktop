import * as types from './types'
import { userAuthSuccess, userAuthError, userFetchSuccess, userFetchError } from './actions'

export const userAuthEpic = (action$, store, { api }) =>
  action$.ofType(types.USER_AUTH)
    .mergeMap(({ payload }) => api.authenticate(payload))
    .map(userAuthSuccess)
    .catch(userAuthError)

export const userFetchEpic = (action$, store, { api }) =>
  action$.ofType(types.USER_FETCH)
    .mergeMap(action => api.getUserData(store.getState()))
    .map(userFetchSuccess)
    .catch(userFetchError)
