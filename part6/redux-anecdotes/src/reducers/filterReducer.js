const reducer = (state = null , action) => {
    console.log('state now: ', state)
    console.log('action', action)
  
    switch(action.type) {
      	case 'filter':
        	return action.content
		case 'clear':
			return null
		default:
			return state
    }
}

export const filter = (content) => {
    return dispatch => {
        dispatch({
            type: 'filter',
            content
        })
    }
}

export default reducer