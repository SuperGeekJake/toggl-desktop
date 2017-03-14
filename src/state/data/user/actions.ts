import * as types from './types'

export const auth  = (email: string, password: string) =>
  ({ type: types.USER_AUTH, payload: { email, password } })

export const userFetch = () =>
  ({ type: types.USER_FETCH })

export const fetchSuccess = (responseBody) => {
  const { since, data } = responseBody
  return {
    type: types.USER_FETCH_SUCCESS,
    payload: {
      since,
      apiToken: data.api_token,
      at: data.at,
      beginningOfWeek: data.beginning_of_week,
      createdAt: data.created_at,
      dataFormat: data.date_format,
      defaultWid: data.default_wid,
      durationFormat: data.duration_format,
      email: data.email,
      fullname: data.fullname,
      id: data.id,
      imageUrl: data.image_url,
      language: data.language,
      timeOfDayFormat: data.timeofday_format,
      timezone: data.timezone
    }
  }
}

export const fetchError = (responseError) => ({
  type: types.USER_FETCH_ERROR,
  payload: responseError,
  error: true
})
