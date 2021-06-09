const reducer = (state='EMPTY' , action) => {
    console.log('state now: ', state)
    console.log('action', action)
  
    switch(action.type) {
      case 'ERROR':
        return `ERROR ${action.message}`
      case 'success':
        return `SUCCESS ${action.message}`
      default:
        return state
    }
  }

  export default reducer