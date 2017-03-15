import { FSA } from 'flux-standard-action'
import { USER_AUTH_SUCCESS, USER_FETCH_SUCCESS } from '../user/types'
import { getWorkspaces } from '../../../utils/workspaces'

export const workspaces = (state = {}, action: FSA<any, any>) => {
  switch (action.type) {
    case USER_AUTH_SUCCESS:
    case USER_FETCH_SUCCESS:
      return { state, ...getWorkspaces(action.payload) }

    default:
      return state
  }
}
