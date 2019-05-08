import React, { useState, useRef } from 'react'
import PropTypes from 'prop-types'

import WarnLoss from 'components/molecules/WarnLoss'
import Line from 'components/molecules/Line'
import Header from 'components/molecules/Header'
import Note from 'components/molecules/Note'
import Notification from 'components/atoms/Notification'

import Feedback from 'components/atoms/Feedback'

import style from './Editor.module.scss'

const filter = query => item => item.target.includes(query)

const Editor = ({
  className,
  lines,
  show,
  onAddPassword,
  onEditPassword,
  onRemoveLine,
  onCancelRemovingLine,
}) => {
  const [ query, setQuery ] = useState('')
  const [ editingNewPassword, editNewPassword ] = useState(false)
  const [ warnLossVisible, showWarnLoss ] = useState(false)
  const filteredLines = lines
    .filter(filter(query))
    .filter(({ removing }) => !removing)
  const removing = lines.filter(({ removing }) => removing).length > 0
  const firstRef = useRef(null)
  return (
    <div className={`${style.Editor} ${className}`}>
      <Header
        query={query}
        onQueryChange={setQuery}
        focus={show}
        onSubmit={event => {
          event.stopPropagation()
          event.preventDefault()
          firstRef.current.copyInClipboard()
        }}
      >
        <Feedback
          show={query.length > 0 && filteredLines.length > 0}
          className={style.feedback}
        >
          Press enter to copy first entry in clipboard
        </Feedback>
      </Header>
      <div className={style.content}>
        {/* <Note /> */}
        {/*<textarea className={style.textarea}>fdsfsd</textarea> */}

        {/* <Feedback>Press enter to save the password</Feedback> */}
        {filteredLines.map(({ id, target, password }, index) => (
          <Line
            {...(index === 0 ? { ref: firstRef } : {})}
            selected={query.length > 0 && index === 0}
            target={target}
            password={password}
            key={id}
            editable
            forceEditing={
              filteredLines.length === 1 ||
              index < filteredLines.filteredLines - 1
            }
            onChange={({ target, password }) =>
              onEditPassword(id, target, password)
            }
            onRemove={() => onRemoveLine(id)}
          />
        ))}
        {/*<Line
          ref={editRef}
          editable
          onBlur={(target, password) => {
            if (target.length > 0 || password.length > 0) {
              console.log('onBlur')
              onAddPassword(target, password)
              editNewPassword(false)
              editRef.current.init()
            }
          }}
          onChange={(target, password) => editNewPassword(true)}
          forceEditing={filteredLines.length === 0}
          onSubmit={event => {
            console.log('submit')
            event.preventDefault()
            event.stopPropagation()
            editRef.current.generateNewPassword(() => {
              editRef.current.copyInClipboard()
            })
          }}
        />*/}
        <Feedback show={editingNewPassword}>
          Press enter to generate password and copy it in clipboard
        </Feedback>
        <Notification show={removing} onUndo={onCancelRemovingLine}>
          Deleting password...
        </Notification>
      </div>
      {warnLossVisible ? (
        <WarnLoss onClick={() => showWarnLoss(false)} />
      ) : null}
    </div>
  )
}

Editor.defaultProps = {
  className: '',
  lines: [],
  show: false,
  onAddPassword: () => {},
  onEditPassword: () => {},
  onRemoveLine: () => {},
  onCancelRemovingLine: () => {},
}

Editor.propTypes = {
  className: PropTypes.string,
  lines: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([ PropTypes.string, PropTypes.number ]),
      target: PropTypes.string,
      password: PropTypes.string,
    })
  ),
  show: PropTypes.bool,
  onAddPassword: PropTypes.func,
  onEditPassword: PropTypes.func,
  onRemoveLine: PropTypes.func,
  onCancelRemovingLine: PropTypes.func,
}

export default Editor
