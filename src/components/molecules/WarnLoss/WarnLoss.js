import React from 'react'

import Modal from 'components/atoms/Modal'

import style from './WarnLoss.module.scss'

const WarnLoss = ({ className, onClick, type, title, children }) => (
  <Modal>
    <div className={style.modal}>
      To ensure a strong confidentiality, we don't have access to your password
      neither your passphrase.
      <br />
      <br />
      <strong className={style.bold}>
        If you lost your passphrase, you lost your passwords.
      </strong>
    </div>
  </Modal>
)
export default WarnLoss
