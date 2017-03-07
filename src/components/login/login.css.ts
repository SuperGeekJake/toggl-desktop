import { style } from 'typestyle'
import { important } from 'csx'

export const pageTitle = style({
  fontSize: '28px',
  fontWeight: 'bold',
  lineHeight: 1,
  textAlign: 'center',
  textTransform: 'uppercase'
})

export const container = style({
  padding: '28px'
})

export const formFields = style({
  marginBottom: '28px'
})

export const formMeta = style({
  position: 'relative',
  padding: '6px 0',
  marginBottom: '14px'
})

export const remember = style({
  width: important('147px'),
  zIndex: 0
})

export const forgot = style({
  position: important('absolute'),
  top: 0,
  right: 0
})

export const submit = style({
  textAlign: 'center',
  marginBottom: '14px'
})

export const googleSignIn = style({
  textAlign: 'center',
  marginBottom: '56px'
})

export const signUp = style({
  textAlign: 'center'
})
