import service from '../services/blogService'
/*const reducer = (state , action) => {
    console.log('state now: ', state)
    console.log('action', action)
    const sort =  (state) => {
        return state.sort((a,b) => {return b.votes - a.votes})
    }

    switch(action.type) {
    case 'NEW_ANECDOTE':
        return sort([...state, action.data])
    case 'INIT':
        return action.data
    case 'VOTE':
        const id = action.data.id
        const anecdoteToChange = state.find(x => x.id === id)
        const changedAnecdote = {
            ...anecdoteToChange,
            votes: action.data.votes
        }
        return sort(state.map(x => x.id === id? changedAnecdote : x))
    default:
        return sort(state)
    }
}*/


const reducer = (state, action) => {
    console.log('state now: ', state)
    console.log('action', action)

    switch(action.type)  {
    case 'INIT':
        return action.data
    }


}

export const blogInit = async() => {
    const data = await service.getAll()
    return {
        type: 'INIT',
        data: data
    }
}

export default reducer