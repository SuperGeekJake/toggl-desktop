import * as settings from 'electron-settings'
import { Observable } from 'rxjs'

export const get = (propertyPath: string) =>
  Observable.from(
    settings.get(propertyPath)
      .then(res => res)
  )

export const set = (propertyPath: string, data: any) =>
  Observable.from(
    settings.set(propertyPath, data)
      .then(res => res)
  )
