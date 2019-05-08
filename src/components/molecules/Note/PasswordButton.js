import React, { Component } from 'react'
import { RichUtils } from 'draft-js'

import style from './PasswordButton.module.scss'

class PasswordButton extends Component {
  toggleStyle = event => {
    console.log('toggleStyle')
    event.preventDefault()
    this.props.setEditorState(
      RichUtils.toggleBlockType(this.props.getEditorState(), 'PASSWORD')
    )
  }

  blockTypeIsActive = () => {
    // if the button is rendered before the editor
    if (!this.props.getEditorState) {
      return false
    }

    const editorState = this.props.getEditorState()
    const type = editorState
      .getCurrentContent()
      .getBlockForKey(editorState.getSelection().getStartKey())
      .getType()
    return type === 'PASSWORD'
  }

  preventBubblingUp = event => {
    event.preventDefault()
  }

  render () {
    return (
      <div onMouseDown={this.preventBubblingUp}>
        <button
          className={this.blockTypeIsActive() ? style.active : ''}
          onClick={this.toggleStyle}
        >
          Password
        </button>
      </div>
    )
  }
}

export default PasswordButton
