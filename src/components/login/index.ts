import { connect } from 'react-redux'

import { actions } from '../../state'
import LoginScreen from './login-screen'

function mapStateToProps (state) {
  const { auth } = state
  return {
    remember: auth.remember
  }
}

function mapDispatchToProps (dispatch) {
  const { auth } = actions
  return {
    dispatchLogin: (email: string, password: string) => {
      dispatch(auth.login(email, password))
    }
  }
}

const LoginScreenContainer = connect(mapStateToProps, mapDispatchToProps)(LoginScreen)
export default LoginScreenContainer
