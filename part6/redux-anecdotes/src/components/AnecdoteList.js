import React from 'react'
import { vote } from '../reducers/anecdoteReducer'
import { useSelector, useDispatch } from 'react-redux'

const AnecdoteList = () => {
    const anecdotes = useSelector(state => state.anecdote)
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