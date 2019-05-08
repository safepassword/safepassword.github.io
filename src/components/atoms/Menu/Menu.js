import React, { Component } from 'react'
import PropTypes from 'prop-types'

import style from './Menu.module.scss'

class Menu extends Component {
  constructor (props) {
    super(props)

    this.state = {
      open: false,
    }
  }

  open = () => {
    this.setState({
      open: true,
      opening: true,
    })

    this.props.onOpen()

    setTimeout(() => {
      this.setState({
        opening: false,
      })
    }, 100)
  }

  close = () => {
    this.setState({
      open: false,
    })
    this.props.onClose()
  }

  toggle = () => {
    const { open, opening } = this.state
    if (open) {
      this.close()
    } else if (!opening) {
      this.open()
    }
  }

  componentDidMount () {
    window.addEventListener('click', () => {
      if (!this.state.opening) {
        this.close()
      }
    })
  }
  render () {
    const { className, children, position } = this.props
    const { open } = this.state
    if (!open) {
      return null
    }
    return (
      <div
        className={`${style.container} ${className}`}
        click={event => {
          event.preventDefault()
          event.stopPropagation()
        }}
      >
        <div className={`${style.Menu} ${style[position]}`}>{children}</div>
      </div>
    )
  }
}

Menu.defaultProps = {
  className: '',
  onClick: () => {},
  children: [],
  onClose: () => {},
  onOpen: () => {},
  position: 'left',
}

Menu.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
  onClose: PropTypes.func,
  onOpen: PropTypes.func,

  position: PropTypes.string,
}

export default Menu
