import React, { Component } from 'react'
import { RichUtils } from 'draft-js'

class PasswordButton extends Component {
  toggleStyle = event => {
    event.preventDefault()
    this.props.setEditorState(
      RichUtils.toggleInlineStyle(this.props.getEditorState(), 'PASSWORD')
    )
  }
  render () {
    return (
      <div>
        <button onClick={this.toggleStyle}>Password</button>
      </div>
    )
  }
}

export default PasswordButton
