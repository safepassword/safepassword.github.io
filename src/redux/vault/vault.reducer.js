import {
  ADD_PASSWORD,
  EDIT_PASSWORD,
  REMOVE_LINE,
  CONFIRM_REMOVE_LINE,
  CANCEL_REMOVING_LINE,
} from './vault.actions.js'

const initState = {
  list: [ { id: 0, target: '', password: '', removing: false } ],
}

const reducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_PASSWORD:
      return {
        ...state,
        list: [
          ...state.list,
          { id: state.list.length, ...action.payload, removing: false },
        ],
      }

    case EDIT_PASSWORD: {
      const index = state.list.findIndex(({ id }) => id === action.payload.id)
      const list = [ ...state.list ]
      list[index] = { ...action.payload, removing: false }
      if (index === state.list.length - 1) {
        console.log('islast')
        list[index + 1] = {
          id: state.list.length,
          target: '',
          password: '',
          removing: false,
        }
      }
      return {
        ...state,
        list,
      }
    }

    case REMOVE_LINE: {
      const index = state.list.findIndex(({ id }) => id === action.payload.id)
      const list = [ ...state.list ]
      list[index] = { ...state.list[index], removing: true }
      return {
        ...state,
        list,
      }
    }

    case CONFIRM_REMOVE_LINE: {
      const list = state.list.filter(({ removing }) => !removing)
      return {
        ...state,
        list,
      }
    }

    case CANCEL_REMOVING_LINE: {
      const list = state.list.map(({ removing, ...other }) => ({
        ...other,
        removing: false,
      }))
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
