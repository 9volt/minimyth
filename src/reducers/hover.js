const hover = (state = {}, action) => {
  switch(action.type){
    case 'MOUSE_ENTER':
      return {
        ...state,
        current_unit: action.unit
      }
    case 'MOUSE_LEAVE':
      return {
        ...state,
        current_unit: null
      }
    default:
      return state
  }
}

export default hover
