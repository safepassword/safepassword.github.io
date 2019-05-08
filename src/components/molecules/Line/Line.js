import React, { Component, Fragment, useRef } from 'react'
import PropTypes from 'prop-types'
import AnimateHeight from 'react-animate-height'

import Input from 'components/atoms/Input'
import Button from 'components/atoms/Button'
import Menu, { MenuItem } from 'components/atoms/Menu'
import Tooltip from 'components/atoms/Tooltip'
import Feedback from 'components/atoms/Feedback'

import { generatePassword } from 'utils/password'

import { ReactComponent as Check } from 'assets/check.svg'
import { ReactComponent as Settings } from 'assets/settings.svg'
import { ReactComponent as Copy } from 'assets/copy.svg'
import { ReactComponent as Refresh } from 'assets/refresh.svg'
import { ReactComponent as Selection } from 'assets/menu-right.svg'

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

    this.state = {
      menuVisible: false,
      showPassword: false,
      password: this.props.password,
      target: this.props.target,
      copying: false,
      loadingPassword: false,
    }
  }

  init = () => {
    this.setState({
      target: '',
      password: '',
    })
  }

  copyInClipboard = () => {
    this.input.select()
    document.execCommand('copy')
    this.setState({ copying: true })
    setTimeout(() => {
      this.setState({
        copying: false,
      })
    }, 2000)
  }

  generateNewPassword = callback => {
    const { onChange } = this.props
    const { target } = this.state
    const newPassword = generatePassword()
    let index = 1
    const pitch = 500 / newPassword.length
    this.setState({
      loadingPassword: true,
    })
    let interval = setInterval(() => {
      this.setState({
        password: newPassword.substring(0, index),
      })

      index += 1
      if (index === newPassword.length) {
        clearInterval(interval)
        interval = null
        onChange({ target, password: newPassword })
        this.copyInClipboard()
        this.setState({
          loadingPassword: false,
        })
        // callback && callback()
      }
    }, pitch)
  }

  render () {
    const {
      editable,
      className,
      onChange,
      onBlur,
      forceEditing,
      onRemove,
      selected,
    } = this.props
    const {
      menuVisible,
      target,
      showPassword,
      password,
      copying,
      loadingPassword,
    } = this.state
    const editing = password.length > 0 || target.length > 0 || forceEditing
    return (
      <form
        className={`${style.item} ${
          editable ? style.editable : style.nonEditable
        } ${menuVisible ? style.active : ''} ${
          editing ? style.editing : ''
        } ${className}`}
        onSubmit={event => {
          event.stopPropagation()
          event.preventDefault()
          if (password.length === 0) {
            this.generateNewPassword()
          } else {
            this.copyInClipboard()
          }
        }}
      >
        <div className={style.layout}>
          {selected ? (
            <div className={style.indicator}>
              <Selection className={style.icon} />
            </div>
          ) : null}

          <div className={style.container}>
            <input
              value={password}
              type="text"
              ref={e => (this.input = e)}
              readOnly
            />
          </div>
          <Input
            placeholder="Enter the url, login, email"
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
            placeholder="Enter the password"
            className={style.password}
            type={showPassword ? 'text' : 'password'}
            readOnly={!editable}
            value={password}
            onChange={password => {
              this.setState({ password })
              onChange({ target, password })
            }}
            onClick={event => {
              if (!editable) {
                this.copyInClipboard()
              }
            }}
            onBlur={() => onBlur(target, password)}
          />
          {target.length > 0 || password.length > 0 ? (
            <div className={style.more}>
              <Tooltip
                className={style.tooltip}
                label="Password copied"
                show={copying}
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
                    onClick={this.copyInClipboard}
                  >
                    <Copy />
                  </Button>
                )}

                <Button
                  className={style.submit}
                  onClick={event => {
                    this.menu.toggle(event)
                  }}
                  basic
                >
                  <Settings className={style.icon} />
                </Button>
              </div>
              <Menu
                onOpen={() => this.setState({ menuVisible: true })}
                onClose={() => this.setState({ menuVisible: false })}
                className={style.menu}
                ref={e => (this.menu = e)}
              >
                {/* <MenuItem title="Generate random password" /> */}
                <MenuItem
                  title={`${showPassword ? 'Hide' : 'Show'} password`}
                  onClick={() => this.setState({ showPassword: !showPassword })}
                />
                <MenuItem
                  title="Regenerate password"
                  onClick={this.generateNewPassword}
                />
                <MenuItem title="Delete" onClick={onRemove} />
              </Menu>
              <input type="submit" value="Submit" className={style.hidden} />
            </div>
          ) : null}
        </div>
        <AnimateHeight
          duration={500}
          height={password.length === 0 ? 'auto' : 0} // see props documentation bellow
        >
          <Feedback
            show={password.length === 0 && target.length !== 0}
            className={style.feedback}
          >
            Press enter to generate random password and copy in clipboard
          </Feedback>
        </AnimateHeight>
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
  onSubmit: () => {},
  onRemove: () => {},
  selected: false,
}

Line.propTypes = {
  className: PropTypes.string,
  target: PropTypes.string,
  password: PropTypes.string,
  editable: PropTypes.bool,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  forceEditing: PropTypes.bool,
  onSubmit: PropTypes.func,
  onRemove: PropTypes.func,
  selected: PropTypes.bool,
}

export default Line
