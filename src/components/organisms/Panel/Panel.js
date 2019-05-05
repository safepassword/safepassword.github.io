import React from 'react'
import PropTypes from 'prop-types'

import style from './Panel.module.scss'

const Panel = ({ className }) => (
  <div className={`${style.Panel} ${className}`} />
)

Panel.defaultProps = {
  className: '',
}

Panel.propTypes = {
  className: PropTypes.string,
}

export default Panel
