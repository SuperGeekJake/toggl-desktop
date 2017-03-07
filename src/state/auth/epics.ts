// e => ({ type: 'GET_SETTINGS_AUTH_FAILURE', error: true, payload: e })

export const authInitEpic = action$ =>
  action$.ofType('APP_INIT')
    .mapTo({ type: 'PONG' })
    // .mergeMap(action =>
    //   settings.get('auth')
    //     .map(payload => ({ type: 'GET_SETTINGS_AUTH_SUCCESS', payload }))
    // )
