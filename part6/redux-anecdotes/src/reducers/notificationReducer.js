const reducer = (state = '' , action) => {
    console.log('state now: ', state)
    console.log('action', action)
  
    switch(action.type) {
      	case 'ERROR':
        	return `ERROR ${action.message}`
		case 'success':
			return `SUCCESS ${action.message}`
		case 'VOTE_NOTIFICATION':
			return `You voted ${action.message}`
		case 'REMOVE_NOTIFICATION':
			return ''
		default:
			return state
    }
  }

  export const voteNotification = (msg, t) => {
	  return async dispatch => {
		dispatch({
			type: 'VOTE_NOTIFICATION',
			message: msg
		})
		setTimeout(() => {
			dispatch({
				type: 'REMOVE_NOTIFICATION'
			})
		}, t*1000)
	  }
	  
  }

  export const removeNotification = () => {
	  return {
		  type: 'REMOVE_NOTIFICATION'
	  }
  }

  export default reducer