import { ActionCreator } from 'redux'

export const connected: ActionCreator<any> = (): State.Action => ({ type: 'CONNECTED' })
export const disconnected: ActionCreator<any> = (): State.Action => ({ type: 'DISCONNECTED' })

export const online: ActionCreator<any> = (): State.Action => ({ type: 'ONLINE' })
export const offline: ActionCreator<any> = (): State.Action => ({ type: 'OFFLINE' })
