import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import style from './Popup.module.scss'

const Popup = ({
  className,
  modal,
  onClick,
  type,
  title,
  children,
  actions,
  show,
}) => {
  const [ showing, setShowing ] = useState(false)
  useEffect(
    () => {
      if (show) {
        setTimeout(() => {
          setShowing(show)
        }, 10)
      } else {
        setTimeout(() => {
          setShowing(show)
        }, 250)
      }
    },
    [ show ]
  )
  if (!show && !showing) {
    return null
  }
  return (
    <div
      className={`${style.overlay} ${showing && show ? style.show : ''}`}
      onClick={() => {
        if (modal) {
          onClick()
        }
      }}
    >
      <div
        className={`${style.Popup} ${showing && show ? style.show : ''} ${
          style[type]
        }`}
        onClick={event => {
          event.preventDefault()
          event.stopPropagation()
        }}
      >
        {children}
        <div className={style.buttons}>
          {actions.map(({ label, id }) => (
            <button className={style.button} onClick={event => onClick(id)}>
              {label}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

Popup.defaultProps = {
  className: '',
  onClick: () => {},
  children: [],
  type: 'warning',
  modal: false,
  actions: [ { label: 'Close', id: 'close' } ],
  show: false,
}

Popup.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
  type: PropTypes.string,
  modal: PropTypes.bool,
  actions: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      id: PropTypes.string,
    })
  ),
  show: PropTypes.bool,
}

export default Popup
