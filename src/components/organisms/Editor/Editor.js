import React, { useState, useRef } from 'react'
import PropTypes from 'prop-types'

import WarnLoss from 'components/molecules/WarnLoss'
import Line from 'components/molecules/Line'
import Header from 'components/molecules/Header'
import Note from 'components/molecules/Note'

import Feedback from 'components/atoms/Feedback'

import style from './Editor.module.scss'

const filter = query => item => item.target.includes(query)

const Editor = ({ className, lines, show, onAddPassword, onEditPassword }) => {
  const [ query, setQuery ] = useState('')
  const filteredLines = lines.filter(filter(query))
  const editRef = useRef(null)
  return (
    <div className={`${style.Editor} ${className}`}>
      <Header query={query} onQueryChange={setQuery} focus={show}>
        {/*<Feedback
          show={query.length > 0 && filteredLines.length > 0}
          className={style.feedback}
        >
          Press enter to copy first entry in clipboard
        </Feedback> */}
      </Header>
      <div className={style.content}>
        <Note />
        {/*<textarea className={style.textarea}>fdsfsd</textarea> */}

        {/* <Feedback>Press enter to save the password</Feedback> */}
        {/*filteredLines.map(({ id, target, password }) => (
          <Line
            target={target}
            password={password}
            key={id}
            editable
            onChange={(target, password) =>
              onEditPassword(id, target, password)
            }
          />
        ))*/}
        {/*<Line
          ref={editRef}
          editable
          onBlur={(target, password) => {
            if (target.length > 0 || password.length > 0) {
              console.log('onBlur')
              onAddPassword(target, password)
              console.log('editRef', editRef)
              editRef.current.init()
            }
          }}
          forceEditing={filteredLines.length === 0}
        />*/}
      </div>
      {/* <WarnLoss /> */}
    </div>
  )
}

Editor.defaultProps = {
  className: '',
  lines: [],
  show: false,
  onAddPassword: () => {},
}

Editor.propTypes = {
  className: PropTypes.string,
  lines: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      target: PropTypes.string,
      password: PropTypes.string,
    })
  ),
  show: PropTypes.bool,
  onAddPassword: PropTypes.func,
}

export default Editor
