import React from 'react'
import PropTypes from 'prop-types'

import style from './Welcome.module.scss'

const Welcome = ({ className }) => (
  <div className={`${style.Welcome} ${className}`} />
)

Welcome.defaultProps = {
  className: '',
}

Welcome.propTypes = {
  className: PropTypes.string,
}

export default Welcome
