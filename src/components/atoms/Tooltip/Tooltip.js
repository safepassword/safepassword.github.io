import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import style from './Tooltip.module.scss'

const Tooltip = ({ className, label, show }) => {
  const [ showing, setShow ] = useState(false)
  useEffect(
    () => {
      setTimeout(() => {
        console.log('showing')
        setShow(show)
      }, 20)
    },
    [ show ]
  )
  return (
    <div className={`${style.container} ${className}`}>
      {show || showing ? (
        <div className={`${style.Tooltip} ${showing ? style.showing : ''}`}>
          {label}
        </div>
      ) : null}
    </div>
  )
}

Tooltip.defaultProps = {
  className: '',
  label: '',
  show: false,
}

Tooltip.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  show: PropTypes.bool,
}

export default Tooltip
