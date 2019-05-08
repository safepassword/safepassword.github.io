import { connect } from 'react-redux'
import {
  getVault,
  addPassword,
  editPassword,
  removeLine,
  cancelRemovingLine,
} from 'redux/vault'

import component from './Editor'

const mapStateToProps = (state, { match }) => {
  return {
    lines: getVault(state),
  }
}

const mapDispatchToProps = dispatch => ({
  onAddPassword: (target, password) => dispatch(addPassword(target, password)),
  onEditPassword: (id, target, password) =>
    dispatch(editPassword(id, target, password)),
  onRemoveLine: id => dispatch(removeLine(id)),
  onCancelRemovingLine: () => dispatch(cancelRemovingLine()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(component)
