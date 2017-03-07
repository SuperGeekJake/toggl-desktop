import { cssRule } from 'typestyle'

/** Use full window size for application */
cssRule('html, body', {
  width: '100vw',
  height: '100vh',
  margin: 0
})

/** Use border box */
cssRule('html', {
  boxSizing: 'border-box'
})

cssRule('body', {
  color: '#333',
  fontSize: '14px',
  fontFamily: 'Roboto'
})

cssRule('*, *:before, *:after', {
  boxSizing: 'inherit',
  fontFamily: 'inherit'
})

/** Also root should fill parent */
cssRule('#root', {
  width: '100vw',
  height: '100vh'
})

cssRule('*', {
  cursor: 'default',
  '-webkit-user-select': 'none'
})

// Forms
cssRule('input, textarea', {
  '-webkit-user-select': 'text'
})

cssRule('form, input, optgroup, select, textarea', {
  '-webkit-user-select': 'text',
  '-webkit-app-region': 'no-drag'
})

cssRule('button', {
  display: 'inline-block',
  '-webkit-appearance': 'none',
  padding: '0',
  background: 'transparent',
  border: 'none',
  cursor: 'pointer',
  textAlign: 'center'
})
