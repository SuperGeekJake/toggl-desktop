import { PureComponent } from 'react'
import { bindActionCreators, ActionCreatorsMapObject } from 'redux'
import { connect } from 'react-redux'
import { actions } from '../../state'

export interface IProps {
  status: boolean
  connectivityActions: ActionCreatorsMapObject
}

class Connectivity extends PureComponent<IProps, null> {
  constructor(props) {
    super(props)

    this.updateStatus = this.updateStatus.bind(this)
  }

  componentDidMount() {
    window.addEventListener('online', this.updateStatus)
    window.addEventListener('offline', this.updateStatus)
    this.updateStatus()
  }

  componentWillUnmount() {
    window.addEventListener('online', this.updateStatus)
    window.addEventListener('offline', this.updateStatus)
  }

  updateStatus (e = {}) {
    const { status, connectivityActions } = this.props
    const newStatus = navigator.onLine
    if (status === newStatus) return

    if (newStatus) {
      connectivityActions.online()
    } else {
      connectivityActions.offline()
    }
  }

  render () {
    return null
  }
}

const mapStateToProps = (state) => {
  return {
    status: state.connectivity
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    connectivityActions: bindActionCreators(actions.data.connectivity, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Connectivity)
