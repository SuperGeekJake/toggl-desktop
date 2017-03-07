export const isEnvDev = () =>
  process.env.TOGGL_ENV === 'DEV'

export const isEnvProd = () =>
  process.env.TOGGL_ENV !== 'DEV'
