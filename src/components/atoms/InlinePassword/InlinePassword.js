import React from 'react'
import PropTypes from 'prop-types'

import style from './InlinePassword.module.scss'

const InlinePassword = ({ className, offsetKey, children }) => {
  return (
    <span className={style.password} data-offset-key={offsetKey}>
      toto {children}
    </span>
  )
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
