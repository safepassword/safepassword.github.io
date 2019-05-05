import React, { Component } from 'react'
import PropTypes from 'prop-types'

import style from './Menu.module.scss'

class Menu extends Component {
  constructor (props) {
    super(props)
  }

  componentDidMount () {
    // window.addEventListener('click', () => {
    //   this.props.onClose()
    // })
  }
  render () {
    const { open, className, children, position } = this.props
    if (!open) {
      return null
    }
    return (
      <div className={`${style.container} ${className}`}>
        <div className={`${style.Menu} ${style[position]}`}>{children}</div>
      </div>
    )
  }
}

Menu.defaultProps = {
  className: '',
  onClick: () => {},
  children: [],
  open: false,
  onClose: () => {},
  position: 'left',
}

Menu.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
  open: PropTypes.bool,
  onClose: PropTypes.func,
  position: PropTypes.string,
}

export default Menu
