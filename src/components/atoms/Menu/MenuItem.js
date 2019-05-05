import React from 'react'
import PropTypes from 'prop-types'

import style from './MenuItem.module.scss'

const MenuItem = ({ title, onClick }) => (
  <button
    className={style.MenuItem}
    onClick={event => {
      event.stopPropagation()
      event.preventDefault()
      onClick()
    }}
  >
    {title}
  </button>
)

MenuItem.defaultProps = {
  className: '',
  onClick: () => {},
  title: '',
}

MenuItem.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  title: PropTypes.string,
}

export default MenuItem
