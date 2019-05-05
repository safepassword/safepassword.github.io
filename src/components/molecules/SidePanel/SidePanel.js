import React from 'react'
import PropTypes from 'prop-types'

import style from './SidePanel.module.scss'

const SidePanel = ({ className, footer, children }) => (
  <div className={`${style.SidePanel} ${className}`}>
    {children}

    <div className={style.footer}>{footer}</div>
  </div>
)

SidePanel.defaultProps = {
  className: '',
  footer: [],
  children: [],
}

SidePanel.propTypes = {
  className: PropTypes.string,
  footer: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
}

export default SidePanel
