import * as request from 'request'
import { Subject } from 'rxjs'

const defaults = {
  baseUrl: 'https://www.toggl.com/api/v8/',
  method: 'GET',
  json: true
}

const getOptions = (options) => ({ ...defaults, ...options })

const request$ = (options) => {
  const subject = new Subject()
  request(getOptions(options), (error, response, body) => {
    if (error) subject.error(error)
    else subject.next(body)
  })
  return subject
}

export default request$
