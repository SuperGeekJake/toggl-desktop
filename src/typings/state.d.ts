declare namespace State {
  interface App {
    connectivity: Connectivity
    auth: Auth
  }

  interface Action {
    type: string
    payload?: any
    error?: boolean
    meta?: any
  }

  interface Auth {
    key: string | null,
    remember: boolean | null
  }

  interface Connectivity {
    online: boolean
    connected: boolean
  }
}