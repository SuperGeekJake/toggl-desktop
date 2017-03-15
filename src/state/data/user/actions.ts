import * as types from './types'

export const userAuth = (email: string, password: string) =>
  ({ type: types.USER_AUTH, payload: { email, password } })

export const userAuthSuccess = (responseBody) =>
  ({ type: types.USER_AUTH_SUCCESS, payload: responseBody })

export const userAuthError = (responseError) =>
  ({ type: types.USER_AUTH_ERROR, payload: responseError, error: true })

export const userFetch = () =>
  ({ type: types.USER_FETCH })

export const userFetchSuccess = (responseBody) =>
  ({ type: types.USER_FETCH_SUCCESS, payload: responseBody })

export const userFetchError = (responseError) =>
({ type: types.USER_FETCH_ERROR, payload: responseError, error: true })
