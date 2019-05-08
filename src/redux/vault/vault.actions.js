export const ADD_PASSWORD = 'ADD_PASSWORD'
export const addPassword = (target, password) => ({
  type: ADD_PASSWORD,
  payload: { target, password },
})

export const EDIT_PASSWORD = 'EDIT_PASSWORD'
export const editPassword = (id, target, password) => ({
  type: EDIT_PASSWORD,
  payload: { id, target, password },
})

export const REMOVE_LINE = 'REMOVE_LINE'
export const CONFIRM_REMOVE_LINE = 'CONFIRM_REMOVE_LINE'

export const removeLine = id => dispatch => {
  dispatch({
    type: REMOVE_LINE,
    payload: { id },
  })

  setTimeout(() => {
    dispatch({
      type: CONFIRM_REMOVE_LINE,
      payload: { id },
    })
  }, 7000)
}

export const CANCEL_REMOVING_LINE = 'CANCEL_REMOVING_LINE'
export const cancelRemovingLine = () => ({
  type: CANCEL_REMOVING_LINE,
})
