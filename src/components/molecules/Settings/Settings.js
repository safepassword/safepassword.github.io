import React from 'react'

import Popup from 'components/atoms/Popup'
import Button from 'components/atoms/Button'
import ButtonList from 'components/atoms/ButtonList'

import style from './Settings.module.scss'

const Settings = ({ show, className, onClick, title, children }) => (
  <Popup show={show} modal type="normal" onClick={onClick}>
    <div className={style.modal}>
      <h1 className={style.title}>Settings</h1>
      <table className={style.table}>
        <tr className={style.setting}>
          <td className={style.label}>
            <h2 className={style.name}>Passphrase</h2>
            <p className={style.p}>
              To encrypt your passwords on your google drive.
            </p>
          </td>
          <td className={style.action}>
            <Button className={`${style.basic} ${style.button}`}>Update</Button>
          </td>
        </tr>
        <tr className={style.setting}>
          <td className={style.label}>
            <h2 className={style.name}>Timeout</h2>
            <p className={style.p}>
              Automatic disconnection after a long time of inactivity.
            </p>
          </td>
          <td className={style.action}>
            <ButtonList
              className={style.button}
              actions={[
                { id: 'never', label: 'Never' },
                { id: '5', label: '5min' },
                { id: '10', label: '10min' },
              ]}
            />
          </td>
        </tr>
        <tr className={style.setting}>
          <td className={style.label}>
            <h2 className={style.name}>Delete account</h2>
            <p className={style.p}>
              Permanently delete your account and all of your data.
            </p>
          </td>
          <td className={style.action}>
            <Button error className={style.button}>
              Delete
            </Button>
          </td>
        </tr>
      </table>
    </div>
  </Popup>
)
export default Settings
