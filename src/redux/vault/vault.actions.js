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
