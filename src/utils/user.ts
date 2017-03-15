export const getUserData = (resBody) => {
  const { since, data } = resBody
  return {
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
