import React, { useState, useEffect } from 'react'

import Welcome from 'components/organisms/Welcome'
import Panel from 'components/organisms/Panel'
import Connect from 'components/organisms/Connect'
import SetupPassphrase from 'components/organisms/SetupPassphrase'
import ConfirmPassphrase from 'components/organisms/ConfirmPassphrase'
import SignIn from 'components/organisms/Signin'

import Editor from 'components/organisms/Editor'

import style from './Main.module.scss'

const stages = {
  SIGN_IN: 'sign-in',
  CONNECT_GOOGLE: 'connect-google',
  SETUP_PASSPHRASE: 'setup-passphrase',
  CONFIRM_PASSPHRASE: 'confirm-passphrase',
  EDIT: 'edit',
}

const Main = () => {
  const [ stage, setStage ] = useState(stages.SIGN_IN)
  const [ passphrase, setPassphrase ] = useState('')
  const [ loading, setLoad ] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoad(false)
    }, 1000)
  })

  const loadingClassName = loading ? style.loading : style.loaded

  return (
    <div className={`${style.Main} ${loadingClassName} `}>
      <Welcome className={style.welcome} />
      <div className={`${style.panel} ${style[stage]}`}>
        <Connect
          className={`${style.sidePanel} ${style.connect} ${
            style[stage]
          } ${loadingClassName}`}
          onConnect={() => setStage(stages.SETUP_PASSPHRASE)}
        />
        <SetupPassphrase
          className={`${style.sidePanel} ${style.setup} ${
            style[stage]
          } ${loadingClassName}`}
          onSubmit={passphrase => {
            setStage(stages.CONFIRM_PASSPHRASE)
            setPassphrase(passphrase)
          }}
          onCancel={() => setStage(stages.CONNECT_GOOGLE)}
          show={stage === stages.SETUP_PASSPHRASE}
        />
        <ConfirmPassphrase
          className={`${style.sidePanel} ${style.confirm} ${
            style[stage]
          } ${loadingClassName}`}
          onConfirm={() => setStage(stages.EDIT)}
          onCancel={() => setStage(stages.SETUP_PASSPHRASE)}
          expectedPassphrase={passphrase}
          show={stage === stages.CONFIRM_PASSPHRASE}
        />
        <SignIn
          className={`${style.sidePanel} ${style.signIn} ${
            style[stage]
          } ${loadingClassName}`}
          onConfirm={() => setStage(stages.EDIT)}
          expectedPassphrase="azerty"
          show={stage === stages.SIGN_IN}
        />
        <Editor
          className={`${style.full} ${style[stage]} ${loadingClassName}`}
          show={stage === stages.EDIT}
        />
      </div>
    </div>
  )
}

export default Main
