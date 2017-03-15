import * as React from 'react'
import { PureComponent } from 'react'
import { TextField, RaisedButton, Checkbox } from 'material-ui'

import TogglTheme from '../common/toggl-theme'
import ExternalButton from '../common/external-button'
import * as styles from './login.css'

export interface IProps {
  online: boolean
  remember: boolean | null
  actions: any
}

export interface IState {
  loading: boolean
  email: string
  password: string
  remember: boolean
}

class LoginScreen extends PureComponent<IProps, IState> {
  constructor(props) {
    super(props)

    this.state = {
      loading: false,
      email: '',
      password: '',
      remember: props.remember
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleGoogleLogin = this.handleGoogleLogin.bind(this)
  }

  handleChange(e) {
    const target = e.target
    const name = target.name
    const value = target.type === 'checkbox' ? target.checked : target.value

    this.setState({ [name]: value })
  }

  handleSubmit(e) {
    const { email, password, loading } = this.state
    const { online, actions } = this.props
    if (loading || !online) return

    this.setState({ loading: true })
    actions.userAuth(email, password)
  }

  handleGoogleLogin(e) {
    console.log('Google Sign-in attempted')
  }

  render() {
    const { email, password, remember, loading } = this.state
    return (
      <TogglTheme>
        <div className={styles.container}>
          <div className={styles.pageTitle}>Toggl Desktop</div>
          <form onSubmit={this.handleSubmit}>
            <div className={styles.formFields}>
              <TextField
                name="email"
                type="email"
                value={email}
                onChange={this.handleChange}
                floatingLabelText="Email Address"
                fullWidth
              />
              <TextField
                name="password"
                type="password"
                value={password}
                onChange={this.handleChange}
                floatingLabelText="Password"
                fullWidth
              />
            </div>
            <div className={styles.formMeta}>
              <Checkbox
                className={styles.remember}
                name="remember"
                checked={remember}
                onCheck={this.handleChange}
                label="Stay signed in"
              />
              <ExternalButton
                className={styles.forgot}
                label="Forgot password?"
                externalHref="https://toggl.com/forgot-password"
              />
            </div>
            <div className={styles.submit}>
              <RaisedButton
                label={(!loading) ? 'Log In' : null}
                onClick={this.handleSubmit}
                disabled={loading}
                primary
              >{(loading) ? 'Loading' : null}</RaisedButton>
            </div>
          </form>
          <div className={styles.googleSignIn}>
            <RaisedButton
              label="Log In With Google"
              onClick={this.handleGoogleLogin}
            />
          </div>
          <div className={styles.signUp}>
            <p>Don't have an account?</p>
            <ExternalButton
              label="Sign Up Now"
              externalHref="https://toggl.com/signup"
              raised
            />
          </div>
        </div>
      </TogglTheme>
    )
  }
}

export default LoginScreen
