import React, { Component } from 'react'
import './App.css'
import Branding from './components/Branding'
import Header from './components/Header'
import Tag from './components/Tag'
import Content from './components/Content'
import Footer from './components/Footer'
import { createMuiTheme, ThemeProvider } from '@material-ui/core'

const theme = createMuiTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#222433'
    },
    secondary: {
      main: '#dedede'
    }
  }
})

class App extends Component {
  state = {}

  render() {
    return (
      <ThemeProvider theme={theme}>
        <div className='container'>
          <Branding />
          <Header />
          <Tag />
          <Content />
          <Footer />
        </div>
      </ThemeProvider>
    )
  }
}

export default App
