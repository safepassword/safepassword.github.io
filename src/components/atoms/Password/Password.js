import React from 'react'
import PropTypes from 'prop-types'

import style from './Note.module.scss'

const Note = ({ className }) => {
  return <span className={`${style.Password} ${className}`}>Password</span>
}

Note.defaultProps = {
  className: '',
}

Note.propTypes = {
  className: PropTypes.string,
}

export default Note
