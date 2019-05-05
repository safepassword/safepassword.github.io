import { ADD_PASSWORD, EDIT_PASSWORD } from './vault.actions.js'

const initState = {
  list: [],
}

const reducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_PASSWORD:
      return {
        ...state,
        list: [ ...state.list, { id: state.list.length, ...action.payload } ],
      }

    case EDIT_PASSWORD: {
      const index = state.list.findIndex(({ id }) => id === action.payload.id)
      const list = [ ...state.list ]
      list[index] = { ...action.payload }
      return {
        ...state,
        list,
      }
    }

    default:
      return state
  }
}

export default reducer
