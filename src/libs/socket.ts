import * as WebSocket from 'ws'
import { Store } from 'redux'
import { actions } from '../state'

const RECONNECTION_DELAY = 1000

const { connected, disconnected } = actions.connectivity

class Socket {
  private store: Store<State.App>
  private socket: WebSocket

  constructor(store) {
    this.store = store
    const config: WebSocket.IClientOptions = { origin: 'https://toggl.com' }
    this.socket = new WebSocket('wss://stream.toggl.com/ws', config)

    this.socket.on('open', this.onOpen.bind(this))
    this.socket.on('error', this.onError.bind(this))
    this.socket.on('message', this.onMessage.bind(this))
  }

  onOpen (e: Event) {
    this.store.dispatch(connected())
  }

  onClose (e: Event) {
    this.store.dispatch(disconnected())
  }

  onError (e: Error) {

  }

  onMessage (data: any, flags: any) {

  }

  onPing () {

  }

  onPong () {

  }
}

export default Socket
