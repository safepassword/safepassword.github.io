import React from 'react'
import PropTypes from 'prop-types'

import style from './Notification.module.scss'

const Notification = ({ className, show, onUndo, children }) => (
  <div
    className={`${style.Notification} ${
      show ? style.showing : ''
    } ${className}`}
  >
    {children}

    <button type="button" className={style.button} onClick={onUndo}>
      Undo
    </button>
  </div>
)

Notification.defaultProps = {
  className: '',
  onUndo: () => {},
  children: [],
  show: false,
}

Notification.propTypes = {
  className: PropTypes.string,
  onUndo: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
  show: PropTypes.bool,
}

export default Notification
