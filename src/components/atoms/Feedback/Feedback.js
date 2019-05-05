import React from 'react'
import PropTypes from 'prop-types'

import style from './Feedback.module.scss'

const Feedback = ({ className, children, show }) => (
  <div
    className={`${style.Feedback} ${
      show ? style.show : style.hide
    } ${className}`}
  >
    {children}
  </div>
)

Feedback.defaultProps = {
  className: '',
  onClick: () => {},
  children: [],
  show: false,
}

Feedback.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
  show: PropTypes.bool,
}

export default Feedback
