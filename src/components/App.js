import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Main from 'components/pages/Main'

import style from './App.module.scss'

class App extends Component {
  render () {
    return (
      <div className={style.App}>
        <Main />
      </div>
    )
  }
}

export default App
