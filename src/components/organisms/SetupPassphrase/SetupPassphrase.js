import React, { useState } from 'react'
import PropTypes from 'prop-types'

import SidePanel from 'components/molecules/SidePanel'
import Input from 'components/atoms/Input'
import Button from 'components/atoms/Button'
import IconButton from 'components/atoms/IconButton'

import { ReactComponent as Right } from 'assets/chevron-right.svg'

import style from './SetupPassphrase.module.scss'

const SetupPassphrase = ({ className, onCancel, onSubmit, show }) => {
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
      <form
        className={style.form}
        onSubmit={event => {
          event.preventDefault()
          event.stopPropagation()
          onSubmit(passphrase)
        }}
      >
        <div className={style.introduction}>
          Protect your vault with a passphrase
        </div>
        <Input
          className={style.input}
          type="password"
          value={passphrase}
          placeholder="Enter a strong secret passphrase"
          onChange={setPassphrase}
          focus={show}
        />
        <IconButton
          onClick={() => onSubmit(passphrase)}
          disabled={passphrase.length < 2}
        >
          <Right className={style.icon} />
        </IconButton>
        <input type="submit" className={style.submit} />
      </form>
    </SidePanel>
  )
}

SetupPassphrase.defaultProps = {
  className: '',
  onSubmit: () => {},
  onCancel: () => {},
  show: false,
}

SetupPassphrase.propTypes = {
  className: PropTypes.string,
  onSubmit: PropTypes.func,
  onCancel: PropTypes.func,
  show: PropTypes.bool,
}

export default SetupPassphrase
