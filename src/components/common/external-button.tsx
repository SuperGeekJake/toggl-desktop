import * as React from 'react'
import { PureComponent } from 'react'
import { shell } from 'electron'
import { FlatButton, RaisedButton } from 'material-ui'

export interface IProps extends __MaterialUI.FlatButtonProps, __MaterialUI.RaisedButtonProps {
  externalHref: string
  raised?: boolean
  ref?: any
}

class ExternalButton extends PureComponent<IProps, null> {
  public static defaultProps = {
    raised: false
  }

  constructor (props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)
  }

  public handleClick (e) {
    shell.openExternal(this.props.externalHref)
  }

  public render () {
    // tslint:disable-next-line
    const { externalHref, raised, ...buttonProps } = this.props
    const Button = (raised) ? RaisedButton : FlatButton
    return (
      <Button onClick={this.handleClick} {...buttonProps} />
    )
  }
}

export default ExternalButton
