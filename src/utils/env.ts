export function isEnvDev (): boolean {
  return process.env.TOGGL_ENV === 'DEV'
}

export function isEnvProd (): boolean {
  return process.env.TOGGL_ENV !== 'DEV'
}
