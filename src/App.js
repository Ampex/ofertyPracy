import React, { Component } from 'react'
import './App.css'
import Branding from './components/Branding'
import Header from './components/Header'
import Content from './components/Content'
import Footer from './components/Footer'
import { createMuiTheme, ThemeProvider } from '@material-ui/core'

const theme = createMuiTheme({
  overrides: {
    MuiOutlinedInput: {
      root: {
        fontSize: 35,
        color: '#2a2d3a'
      },
      input: {
        textTransform: 'lowercase'
      }
    }
  },
  palette: {
    type: 'light',
    primary: {
      main: '#26AA00'
    },
    secondary: {
      main: '#414141'
    }
  },
  MuiListItemText: {
    root: {
      fontSize: 4
    }
  },
  MuiDrawer: {
    root: {
      width: 250
    }
  }
})

class App extends Component {
  state = {
    value: ''
  }

  handleChange = e => {
    this.setState({
      value: e.target.value
    })
  }

  render() {
    const { value } = this.state
    return (
      <ThemeProvider theme={theme}>
        <div className='container'>
          <Branding />
          <Header onChange={this.handleChange} value={value} />
          <Content value={value} />
          <Footer />
        </div>
      </ThemeProvider>
    )
  }
}

export default App
