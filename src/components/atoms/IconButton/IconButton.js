import React from 'react'
import PropTypes from 'prop-types'

import style from './IconButton.module.scss'

const IconButton = ({ className, onClick, title, children, disabled }) => (
  <button
    className={`${style.IconButton} ${className}`}
    title={title}
    onClick={onClick}
    disabled={disabled}
  >
    {children}
  </button>
)

IconButton.defaultProps = {
  className: '',
  onClick: () => {},
  children: [],
  disabled: false,
}

IconButton.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
  disabled: PropTypes.bool,
}

export default IconButton
