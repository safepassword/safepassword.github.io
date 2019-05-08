import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Tooltip from 'components/atoms/Tooltip'

import style from './InlinePassword.module.scss'

class InlinePassword extends Component {
  constructor (props) {
    super(props)

    this.state = {
      copying: false,
    }
  }

  onClick = () => {
    this.setState({
      copying: true,
    })

    setTimeout(() => {
      this.setState({
        copying: false,
      })
    }, 1500)
  }

  render () {
    const { offsetKey, block, contentState, blockProps } = this.props
    const { copying } = this.state
    console.log('contentState', contentState, block)
    const { text } = blockProps
    // const data = contentState.getEntity(block.getEntityAt(0)).getData()
    // console.log('data', data)
    return (
      <div
        className={style.password}
        data-offset-key={offsetKey}
        onClick={this.onClick}
      >
        {text.split('').map(letter => '*')}
        <Tooltip
          className={style.tooltip}
          show={copying}
          label="Copied in clipboard"
        />
      </div>
    )
  }
}

InlinePassword.defaultProps = {
  className: '',
  offsetKey: '',
  children: [],
}

InlinePassword.propTypes = {
  className: PropTypes.string,
  offsetKey: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
}

export default InlinePassword
