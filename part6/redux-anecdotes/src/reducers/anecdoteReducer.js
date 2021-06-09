import service from '../services/anecdotes'
const anecdotesAtStart = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

const initialState = [].map(asObject)

const reducer = (state = initialState, action) => {
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
                votes: anecdoteToChange.votes + 1
            }
            return sort(state.map(x => x.id === id? changedAnecdote : x))
        default:
            return sort(state)
    }
}

const generateId = () =>
  Number((Math.random() * 1000000).toFixed(0))

export const createAnecdote = (content) => {
  return async dispatch => {
    const anecdote = await service.create(content)
    dispatch({
      type: 'NEW_ANECDOTE',
      data: anecdote
    })
  }
} 

export const vote = (id) => {
  return {
    type: 'VOTE',
    data: {id: id}
  }
}

export const filter = (data) => {
  return {
    type: 'VOTE',
    data: data
  }
}

export const init = (data) => {
    return async dispatch => {
        const anecdotes = await service.getAll()
        dispatch({
        type: 'INIT',
        data: anecdotes
        })
    }
}

export default reducer