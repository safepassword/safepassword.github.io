import React from 'react'
import PropTypes from 'prop-types'

import style from './Button.module.scss'

const Button = ({
  className,
  onClick,
  title,
  children,
  primary,
  basic,
  error,
}) => (
  <button
    className={`${style.Button} ${primary ? style.primary : ''} ${
      basic ? style.basic : ''
    } ${error ? style.error : ''} ${className}`}
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
  error: false,
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
  error: PropTypes.bool,
}

export default Button
