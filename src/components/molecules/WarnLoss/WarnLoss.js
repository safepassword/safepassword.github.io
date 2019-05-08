import React from 'react'

import Popup from 'components/atoms/Popup'

import style from './WarnLoss.module.scss'

const WarnLoss = ({ className, onClick, type, title, children }) => (
  <Popup onClick={onClick} actions={[ { label: 'Close', id: 'close' } ]}>
    <div className={style.modal}>
      To ensure a strong confidentiality, we don't have access to your password
      neither your passphrase.
      <br />
      <br />
      <strong className={style.bold}>
        If you lost your passphrase, you lost your passwords.
      </strong>
    </div>
  </Popup>
)
export default WarnLoss
