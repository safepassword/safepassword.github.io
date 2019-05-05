import React, { Component } from 'react'
import { RichUtils } from 'draft-js'

import style from './PasswordButton.module.scss'

class PasswordButton extends Component {
  toggleStyle = event => {
    console.log('toggleStyle')
    event.preventDefault()
    this.props.setEditorState(
      RichUtils.toggleInlineStyle(this.props.getEditorState(), 'PASSWORD')
    )
  }

  styleIsActive = () => {
    return (
      this.props.getEditorState &&
      this.props
        .getEditorState()
        .getCurrentInlineStyle()
        .has('PASSWORD')
    )
  }

  preventBubblingUp = event => {
    event.preventDefault()
  }

  render () {
    return (
      <div onMouseDown={this.preventBubblingUp}>
        <button
          className={this.styleIsActive() ? style.active : ''}
          onClick={this.toggleStyle}
        >
          Password
        </button>
      </div>
    )
  }
}

export default PasswordButton
