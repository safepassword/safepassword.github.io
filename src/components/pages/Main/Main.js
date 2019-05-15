import React, { useState, useEffect } from 'react'

import Welcome from 'components/organisms/Welcome'
import Panel from 'components/organisms/Panel'
import Connect from 'components/organisms/Connect'
import SetupPassphrase from 'components/organisms/SetupPassphrase'
import ConfirmPassphrase from 'components/organisms/ConfirmPassphrase'
import SignIn from 'components/organisms/Signin'

import Editor from 'components/organisms/Editor'

import Context, { routes } from 'contexts/route'

import style from './Main.module.scss'

const Main = () => {
  const [ stage, setStage ] = useState(routes.EDIT)
  const [ passphrase, setPassphrase ] = useState('')
  const [ loading, setLoad ] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoad(false)
    }, 1000)
  })

  const loadingClassName = loading ? style.loading : style.loaded

  return (
    <Context.Provider value={{ change: route => setStage(route) }}>
      <div className={`${style.Main} ${loadingClassName} `}>
        <Welcome className={style.welcome} />
        <div className={`${style.panel} ${style[stage]}`}>
          <Connect
            className={`${style.sidePanel} ${style.connect} ${
              style[stage]
            } ${loadingClassName}`}
            onConnect={() => setStage(routes.SETUP_PASSPHRASE)}
          />
          <SetupPassphrase
            className={`${style.sidePanel} ${style.setup} ${
              style[stage]
            } ${loadingClassName}`}
            onSubmit={passphrase => {
              setStage(routes.CONFIRM_PASSPHRASE)
              setPassphrase(passphrase)
            }}
            onCancel={() => setStage(routes.CONNECT_GOOGLE)}
            show={stage === routes.SETUP_PASSPHRASE}
          />
          <ConfirmPassphrase
            className={`${style.sidePanel} ${style.confirm} ${
              style[stage]
            } ${loadingClassName}`}
            onConfirm={() => setStage(routes.EDIT)}
            onCancel={() => setStage(routes.SETUP_PASSPHRASE)}
            expectedPassphrase={passphrase}
            show={stage === routes.CONFIRM_PASSPHRASE}
          />
          <SignIn
            className={`${style.sidePanel} ${style.signIn} ${
              style[stage]
            } ${loadingClassName}`}
            onConfirm={() => setStage(routes.EDIT)}
            expectedPassphrase="azerty"
            show={stage === routes.SIGN_IN}
          />
          <Editor
            className={`${style.full} ${style[stage]} ${loadingClassName}`}
            show={stage === routes.EDIT}
          />
        </div>
      </div>
    </Context.Provider>
  )
}

export default Main
