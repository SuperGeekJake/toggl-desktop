import { FSA } from 'flux-standard-action'

const initialState: State.Connectivity = {
  online: false,
  connected: false
}

export const connectivity = (state = initialState, action: FSA<any, any>) => {
  switch (action.type) {
    case 'ONLINE':
      return { ...state, online: true }
    case 'OFFLINE':
      return { ...state, online: false }
    case 'CONNECTED':
      return { ...state, connected: true }
    case 'DISCONNECTED':
      return { ...state, connected: false }
    default:
      return state
  }
}
