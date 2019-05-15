import React from 'react'

export default React.createContext({ change: () => {} })

export const routes = {
  SIGN_IN: 'sign-in',
  CONNECT_GOOGLE: 'connect-google',
  SETUP_PASSPHRASE: 'setup-passphrase',
  CONFIRM_PASSPHRASE: 'confirm-passphrase',
  EDIT: 'edit',
}
