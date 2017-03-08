import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actions } from '../../state'
import LoginScreen from './login-screen'

function mapStateToProps (state) {
  const { auth, connectivity } = state
  return {
    remember: auth.remember,
    online: connectivity.online
  }
}

function mapDispatchToProps (dispatch) {
  return {
    actions: {
      auth: bindActionCreators(actions.auth, dispatch),
      connectivity: bindActionCreators(actions.connectivity, dispatch)
    }
  }
}

const LoginScreenContainer = connect(mapStateToProps, mapDispatchToProps)(LoginScreen)
export default LoginScreenContainer
