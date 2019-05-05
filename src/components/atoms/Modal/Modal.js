import React from 'react'
import PropTypes from 'prop-types'

import style from './Modal.module.scss'

const Modal = ({ className, onClick, type, title, children }) => (
  <div className={style.overlay}>
    <div className={`${style.Modal} ${style[type]}`}>
      {children}
      <div className={style.buttons}>
        <button className={style.button}>Ok</button>
      </div>
    </div>
  </div>
)

Modal.defaultProps = {
  className: '',
  onClick: () => {},
  children: [],
  type: 'warning',
}

Modal.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
  type: PropTypes.string,
}

export default Modal
