import * as React from 'react'
import { PureComponent } from 'react'
import { MuiThemeProvider, getMuiTheme } from 'material-ui/styles'
import { white } from 'material-ui/styles/colors'

// This replaces the textColor value on the palette
// and then update the keys for each component that depends on it.
// More on Colors: http://www.material-ui.com/#/customization/colors
const togglTheme = getMuiTheme({
  palette: {
    primary1Color: '#f30c16'
  },
  appBar: {
    height: 50
  },
  raisedButton: {
    primaryTextColor: white
  }
})

class TogglTheme extends PureComponent<null, null> {
  public render() {
    // ... and renders the wrapped component with the fresh data!
    // Notice that we pass through any additional props
    return (
      <MuiThemeProvider muiTheme={togglTheme}>
        {this.props.children}
      </MuiThemeProvider>
    )
  }
}

export default TogglTheme
