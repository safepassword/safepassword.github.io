import React, { useState } from 'react'
import PropTypes from 'prop-types'

import SidePanel from 'components/molecules/SidePanel'
import Input from 'components/atoms/Input'
import Button from 'components/atoms/Button'
import IconButton from 'components/atoms/IconButton'

import { ReactComponent as Check } from 'assets/check.svg'

import style from './Signin.module.scss'

const Signin = ({
  className,
  onCancel,
  onConfirm,
  expectedPassphrase,
  show,
}) => {
  const [ passphrase, setPassphrase ] = useState('')
  const [ readOnly, setReadOnly ] = useState(false)

  return (
    <SidePanel className={className}>
      <div className={style.introduction}>
        Use your secret passphrase to decrypt your data.
      </div>
      <Input
        className={style.input}
        type="password"
        placeholder="Enter your passphrase"
        value={passphrase}
        readOnly={readOnly}
        onChange={value => {
          setPassphrase(value)
          if (value === expectedPassphrase) {
            setReadOnly(true)
            setTimeout(() => {
              onConfirm()
            }, 750)
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

Signin.defaultProps = {
  className: '',
  onConfirm: () => {},
  onCancel: () => {},
  expectedPassphrase: '',
  show: false,
}

Signin.propTypes = {
  className: PropTypes.string,
  onConfirm: PropTypes.func,
  onCancel: PropTypes.func,
  expectedPassphrase: PropTypes.string,
  show: PropTypes.bool,
}

export default Signin
