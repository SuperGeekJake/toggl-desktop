declare namespace State {
  interface App {
    connectivity: Connectivity
    user: User
  }

  interface Action {
    type: string
    payload?: any
    error?: boolean
    meta?: any
  }

  interface User {
    key: string | null,
    remember: boolean | null
  }

  interface Connectivity {
    online: boolean
    connected: boolean
  }
}
