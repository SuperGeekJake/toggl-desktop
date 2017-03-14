import * as types from './types'
import { fetchSuccess, fetchError } from './actions'

export const userAuthEpic = (action$, store, { api }) =>
  action$.ofType(types.USER_AUTH)
    .mergeMap(({ payload }) => api.authenticate(payload))
    .map(fetchSuccess)
    .catch(fetchError)

export const userFetchEpic = (action$, store, { api }) =>
  action$.ofType(types.USER_FETCH)
    .mergeMap(action => api.getUserData(store.getState()))
    .map(fetchSuccess)
    .catch(fetchError)
