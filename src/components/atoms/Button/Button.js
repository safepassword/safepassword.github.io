import React from 'react'
import PropTypes from 'prop-types'

import style from './Button.module.scss'

const Button = ({ className, onClick, title, children, primary, basic }) => (
  <button
    className={`${style.Button} ${primary ? style.primary : ''} ${
      basic ? style.basic : ''
    } ${className}`}
    type="button"
    onClick={onClick}
  >
    {children}
  </button>
)

Button.defaultProps = {
  className: '',
  onClick: () => {},
  children: [],
  primary: false,
  basic: false,
}

Button.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
  primary: PropTypes.bool,
  basic: PropTypes.bool,
}

export default Button
