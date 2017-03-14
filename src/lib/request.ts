import * as request from 'request'
import { Observable } from 'rxjs'

const defaults = {
  baseUrl: 'https://www.toggl.com/api/v8/',
  method: 'GET',
  json: true
}

const getOptions = (options) => ({ ...defaults, ...options })

const request$ = (options) =>
  Observable.create(observer => {
    request(getOptions(options), (error, response, body) => {
      if (error) observer.error(error)
      else observer.next(body)
      observer.complete()
    })
  })

export default request$
