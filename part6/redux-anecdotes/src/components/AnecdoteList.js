import React from 'react'
import { vote } from '../reducers/anecdoteReducer'
import { useSelector, useDispatch } from 'react-redux'
import Filter from './filter'
const AnecdoteList = () => {
    const filter = useSelector(state => state.filter)
    const anecdotes = useSelector(state => {
        if(filter) {
            return state.anecdote.filter(x => x.content.indexOf(filter) !== -1)
        } else
        {
            return state.anecdote
        }
    })
    const dispatch = useDispatch()
  
    const v = (id) => {
      console.log('vote', id)
      dispatch({type:'VOTE_NOTIFICATION',message:(anecdotes.find(x => x.id === id)).content})
      setTimeout(() => {
          dispatch({type:'REMOVE_NOTIFICATION'})
      },3000)
      dispatch(vote(id))
    }

    return (
        <>
            <h2>Anecdotes</h2>
            <Filter></Filter>
            {anecdotes.map(anecdote =>
                <div key={anecdote.id}>
                <div>
                    {anecdote.content}
                 </div>
                <div>
                    has {anecdote.votes}
                    <button onClick={() => v(anecdote.id)}>vote</button>
                </div>
                </div>
            )}
      </>
    )
}

export default AnecdoteList