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
  const { connectivity, user } = actions.data
  return {
    actions: {
      user: bindActionCreators(user, dispatch),
      connectivity: bindActionCreators(connectivity, dispatch)
    }
  }
}

const LoginScreenContainer = connect(mapStateToProps, mapDispatchToProps)(LoginScreen)
export default LoginScreenContainer
