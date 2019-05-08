import React, { useState } from 'react'
import PropTypes from 'prop-types'

import style from './ButtonList.module.scss'

const ButtonList = ({ className, onClick, actions }) => {
  const [ value, setValue ] = useState(actions[0].id)
  return (
    <div className={style.ButtonList}>
      {actions.map(({ id, label }) => (
        <button
          key={id}
          className={`${style.button} ${
            value === id ? style.active : ''
          } ${className}`}
          type="button"
          onClick={() => {
            setValue(id)
            onClick(id)
          }}
        >
          {label}
        </button>
      ))}
    </div>
  )
}

ButtonList.defaultProps = {
  className: '',
  onClick: () => {},
  actions: [ { id: 'never', label: 'Never' } ],
}

ButtonList.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  actions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
    })
  ),
}

export default ButtonList
