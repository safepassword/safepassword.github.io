import React from 'react'
import PropTypes from 'prop-types'

import Button from 'components/atoms/Button'
import SidePanel from 'components/molecules/SidePanel'

import style from './Connect.module.scss'

const Connect = ({ className, onConnect }) => (
  <SidePanel className={className}>
    <div className={style.introduction}>
      All your data will be stored in an encrypted vault on your Google Drive.
    </div>
    <Button className={style.connect} onClick={onConnect} primary>
      Connect with Google
    </Button>
  </SidePanel>
)

Connect.defaultProps = {
  className: '',
  onConnect: () => {},
}

Connect.propTypes = {
  className: PropTypes.string,
  onConnect: PropTypes.func,
}

export default Connect
