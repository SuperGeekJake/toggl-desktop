import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actions } from '../../state'
import LoginScreen from './login-screen'

function mapStateToProps (state) {
  const { user, connectivity } = state.data
  return {
    remember: user.remember,
    online: connectivity.online
  }
}

function mapDispatchToProps (dispatch) {
  const { user } = actions.data
  return {
    actions: bindActionCreators(user, dispatch)
  }
}

const LoginScreenContainer = connect(mapStateToProps, mapDispatchToProps)(LoginScreen)
export default LoginScreenContainer
