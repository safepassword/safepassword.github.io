import React, { Component } from 'react'
import PropTypes from 'prop-types'

import style from './Input.module.scss'

class Input extends Component {
  componentDidUpdate (prevProps) {
    if (this.props.focus && !prevProps.focus) {
      setTimeout(() => {
        this.focus()
      }, 500)
    }
  }

  focus () {
    if (this.input) {
      console.log('focus')
      this.input.focus()
    }
  }

  render () {
    const {
      type,
      className,
      placeholder,
      onChange,
      defaultValue,
      onFocus,
      icon,
      readOnly,
      onClick,
      value,
      onBlur,
    } = this.props

    const props = {}

    if (value !== null) {
      props.value = value
    } else {
      props.defaultValue = defaultValue
    }

    return (
      <div
        className={`${style.Input} ${className}`}
        onClick={event => (readOnly ? onClick(event) : this.input.focus())}
      >
        {icon}
        <input
          ref={e => (this.input = e)}
          type={type}
          className={`${style.input} ${icon ? style.margin : ''}`}
          placeholder={placeholder}
          onChange={event => onChange(event.target.value)}
          readOnly={readOnly}
          onBlur={onBlur}
          {...props}
        />
      </div>
    )
  }
}

Input.defaultProps = {
  className: '',
  placeholder: '',
  onChange: () => {},
  defaultValue: '',
  onFocus: () => {},
  type: 'text',
  icon: null,
  clearable: false,
  readOnly: false,
  onClick: () => {},
  value: null,
  focus: false,
  onBlur: () => {},
}

Input.propTypes = {
  className: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  defaultValue: PropTypes.string,
  onFocus: PropTypes.func,
  type: PropTypes.string,
  icon: PropTypes.node,
  clearable: PropTypes.bool,
  readOnly: PropTypes.bool,
  onClick: PropTypes.func,
  value: PropTypes.string,
  focus: PropTypes.bool,
  onBlur: PropTypes.func,
}

export default Input
