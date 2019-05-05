import React, { Component, Fragment, useRef } from 'react'
import PropTypes from 'prop-types'

import Input from 'components/atoms/Input'
import Button from 'components/atoms/Button'
import Menu, { MenuItem } from 'components/atoms/Menu'
import Tooltip from 'components/atoms/Tooltip'

import { ReactComponent as Check } from 'assets/check.svg'
import { ReactComponent as Settings } from 'assets/settings.svg'
import { ReactComponent as Copy } from 'assets/copy.svg'
import { ReactComponent as Refresh } from 'assets/refresh.svg'

import style from './Line.module.scss'

const paste = password => event => {
  if (window.clipboardData) {
    window.clipboardData.setData('Text', password)
  } else if (event.originalEvent.clipboardData) {
    event.originalEveeventnt.clipboardData.setData('text/plain', password)
  } else {
    //alert('Clipboard Data are not supported in this browser. Sorry.');
  }
}

class Line extends Component {
  constructor (props) {
    super(props)

    this.generateNewPassword = this.generateNewPassword.bind(this)
    this.init = this.init.bind(this)

    this.state = {
      openMenu: false,
      showPassword: false,
      password: this.props.password,
      target: this.props.target,
      copied: false,
      loadingPassword: false,
    }
  }

  init () {
    this.setState({
      target: '',
      password: '',
    })
  }

  generateNewPassword () {
    const { onChange } = this.props
    const { target } = this.state
    const newPassword = 'azerty'
    let index = 1
    let interval = setInterval(() => {
      this.setState({
        password: newPassword.substring(0, index),
      })

      index += 1
      if (index === newPassword.length) {
        clearInterval(interval)
        interval = null
        onChange({ target, password: newPassword })
      }
    }, 75)
  }

  render () {
    const { editable, className, onChange, onBlur, forceEditing } = this.props
    const {
      openMenu,
      target,
      showPassword,
      password,
      copied,
      loadingPassword,
    } = this.state
    const editing = password.length > 0 || target.length > 0 || forceEditing
    return (
      <form
        className={`${style.item} ${
          editable ? style.editable : style.nonEditable
        } ${openMenu ? style.active : ''} ${
          editing ? style.editing : ''
        } ${className}`}
      >
        <input
          className={style.input}
          value={password}
          ref={e => (this.input = e)}
          readOnly
        />
        <Input
          placeholder="Enter the website"
          className={style.target}
          value={target}
          onChange={target => {
            this.setState({ target })
            onChange({ target, password })
          }}
          readOnly={!editable}
          onBlur={() => {
            console.log('onBlur')
            onBlur(target, password)
          }}
        />
        <Input
          placeholder="Password"
          className={style.password}
          defaultValue={password}
          type={showPassword ? 'text' : 'password'}
          readOnly={!editable}
          value={password}
          onChange={password => {
            this.setState({ password })
            onChange({ target, password })
          }}
          onClick={event => {
            if (!editable) {
              console.log('copy')
              this.input.select()
              document.execCommand('copy')
              // event.preventDefault()
              // event.stopPropagation()
            }
          }}
          onBlur={() => onBlur(target, password)}
        />

        <div className={style.more}>
          <Tooltip
            className={style.tooltip}
            label="Password copied"
            show={copied}
          />
          <div className={style.list}>
            {password === '' || loadingPassword ? (
              <Button
                className={style.submit}
                onClick={this.generateNewPassword}
              >
                <Refresh />
              </Button>
            ) : (
              <Button
                className={style.submit}
                onClick={() => {
                  this.input.select()
                  document.execCommand('copy')
                  this.setState({ copied: true })
                  setTimeout(() => {
                    this.setState({
                      copied: false,
                    })
                  }, 2000)
                }}
              >
                <Copy />
              </Button>
            )}

            <Button
              className={style.submit}
              onClick={() => this.setState({ openMenu: !openMenu })}
              basic
            >
              <Settings className={style.icon} />
            </Button>
          </div>
          <Menu
            className={style.menu}
            open={openMenu}
            onClose={() => this.setState({ openMenu: false })}
          >
            {/* <MenuItem title="Generate random password" /> */}
            <MenuItem
              title={`${showPassword ? 'Hide' : 'Show'} password`}
              onClick={() => this.setState({ showPassword: !showPassword })}
            />
            <MenuItem
              title="Delete"
              onClick={() => this.setState({ showPassword: !showPassword })}
            />
          </Menu>
        </div>
      </form>
    )
  }
}

Line.defaultProps = {
  className: '',
  target: '',
  password: '',
  editable: false,
  onChange: () => {},
  onBlur: () => {},
  forceEditing: false,
}

Line.propTypes = {
  className: PropTypes.string,
  target: PropTypes.string,
  password: PropTypes.string,
  editable: PropTypes.bool,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  forceEditing: PropTypes.bool,
}

export default Line
