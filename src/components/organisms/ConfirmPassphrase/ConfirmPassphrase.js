import React, { useState } from 'react'
import PropTypes from 'prop-types'

import SidePanel from 'components/molecules/SidePanel'
import Input from 'components/atoms/Input'
import Button from 'components/atoms/Button'
import IconButton from 'components/atoms/IconButton'

import { ReactComponent as Check } from 'assets/check.svg'

import style from './ConfirmPassphrase.module.scss'

const ConfirmPassphrase = ({
  className,
  onCancel,
  onConfirm,
  expectedPassphrase,
  show,
}) => {
  const [ passphrase, setPassphrase ] = useState('')
  return (
    <SidePanel
      className={className}
      footer={
        <button onClick={onCancel} className={style.forget}>
          Go back
        </button>
      }
    >
      <div className={style.introduction}>
        Your passphrase is the only way to retrieve your passwords.
      </div>
      <Input
        className={style.input}
        type="password"
        placeholder="Confirm passphrase"
        value={passphrase}
        onChange={value => {
          setPassphrase(value)
          if (value === expectedPassphrase) {
            setTimeout(() => {
              onConfirm()
            }, 1000)
          }
        }}
        focus={show}
      />
      <IconButton
        onClick={onConfirm}
        disabled={passphrase !== expectedPassphrase}
      >
        <Check className={style.icon} />
      </IconButton>
    </SidePanel>
  )
}

ConfirmPassphrase.defaultProps = {
  className: '',
  onConfirm: () => {},
  onCancel: () => {},
  expectedPassphrase: '',
  show: false,
}

ConfirmPassphrase.propTypes = {
  className: PropTypes.string,
  onConfirm: PropTypes.func,
  onCancel: PropTypes.func,
  expectedPassphrase: PropTypes.string,
  show: PropTypes.bool,
}

export default ConfirmPassphrase
