import request$ from '../lib/request'

export const authenticate = (payload) =>
  request$({
    uri: 'me',
    auth: {
      user: payload.email,
      pass: payload.password
    }
  })

export const getUserData = (state) => {
  const since = (state.user.since) ? state.user.since : 0
  return request$({
    uri: 'me',
    auth: {
      user: state.user.apiToken,
      pass: 'api_token'
    },
    qs: {
      since,
      with_related_data: true
    }
  })
}
