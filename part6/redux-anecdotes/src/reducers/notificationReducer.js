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

  export default reducer