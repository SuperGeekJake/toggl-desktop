export const login = (email: string, password: string): State.Action =>
  ({ type: 'LOGIN', payload: { email, password } })
