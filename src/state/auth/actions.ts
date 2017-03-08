import { ActionCreator } from 'redux'

export const login: ActionCreator<any>  = (email: string, password: string): State.Action =>
  ({ type: 'LOGIN', payload: { email, password } })
