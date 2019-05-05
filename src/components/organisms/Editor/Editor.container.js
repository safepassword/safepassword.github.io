import { connect } from 'react-redux'
import { getVault, addPassword, editPassword } from 'redux/vault'

import component from './Editor'

const mapStateToProps = (state, { match }) => {
  return {
    lines: getVault(state),
  }
}

const mapDispatchToProps = dispatch => ({
  onAddPassword: (target, password) => dispatch(addPassword(target, password)),
  onEditPassword: (id, target, password) =>
    dispatch(editPassword(target, password)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(component)
