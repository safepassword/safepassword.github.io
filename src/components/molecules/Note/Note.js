import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Editor, { createEditorStateWithText } from 'draft-js-plugins-editor'
import createInlineToolbarPlugin from 'draft-js-inline-toolbar-plugin'
import {
  CompositeDecorator,
  // getDefaultKeyBinding,
  // Editor,
  EditorState,
  DefaultDraftBlockRenderMap,
} from 'draft-js'
import 'draft-js-side-toolbar-plugin/lib/plugin.css'

import InlinePassword from 'components/atoms/InlinePassword'

import PasswordButton from './PasswordButton'

import style from './Note.module.scss'

const inlineToolbarPlugin = createInlineToolbarPlugin()
const { InlineToolbar } = inlineToolbarPlugin
const plugins = [ inlineToolbarPlugin ]

// class MediaComponent extends Component {
//   render () {
//     const { block, contentState } = this.props
//     const { foo } = this.props.blockProps
//     const data = contentState.getEntity(block.getEntityAt(0)).getData()
//
//     return <span>toto</span>
//     // Return a <figure> or some other content using this data.
//   }
// }
//
// function myBlockRenderer (contentBlock) {
//   const type = contentBlock.getType()
//   if (type === 'atomic') {
//     return {
//       component: MediaComponent,
//       editable: false,
//       props: {
//         foo: 'bar',
//       },
//     }
//   }
// }

const HANDLE_REGEX = /@[\w]+/g
const HASHTAG_REGEX = /#[\w\u0590-\u05ff]+/g

function handleStrategy (contentBlock, callback, contentState) {
  findWithRegex(HANDLE_REGEX, contentBlock, callback)
}

function findWithRegex (regex, contentBlock, callback) {
  const text = contentBlock.getText()
  let matchArr, start
  while ((matchArr = regex.exec(text)) !== null) {
    start = matchArr.index
    callback(start, start + matchArr[0].length)
  }
}

const compositeDecorator = new CompositeDecorator([
  {
    strategy: handleStrategy,
    component: InlinePassword,
  },
])

function myBlockRenderer (contentBlock) {
  const type = contentBlock.getType()
  if (type === 'PASSWORD') {
    return {
      component: InlinePassword,
      editable: false,
      props: {
        foo: 'bar',
      },
    }
  }
}

const styleMap = {
  PASSWORD: {
    textDecoration: 'line-through',
  },
}

class Note extends Component {
  constructor (props) {
    super(props)
    this.state = {
      editorState: createEditorStateWithText(''), // EditorState.createEmpty(/*compositeDecorator*/),
    }
  }

  render () {
    const { className } = this.props
    return (
      <div className={`${style.Note} ${className}`}>
        <Editor
          ref={element => (this.editor = element)}
          editorState={this.state.editorState}
          plugins={plugins}
          onChange={editorState => {
            this.setState({ editorState })
            console.log('onChange')
          }}
          customStyleMap={styleMap}
        />
        <div className={style.toolbar}>
          <InlineToolbar>
            {externalProps => <PasswordButton {...externalProps} />}
          </InlineToolbar>
        </div>
      </div>
    )
  }
}
// {externalProps => <PasswordButton />}</InlineToolbar>

Note.defaultProps = {
  className: '',
}

Note.propTypes = {
  className: PropTypes.string,
}

export default Note
