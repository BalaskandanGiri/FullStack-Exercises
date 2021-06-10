import React from 'react'
import { vote } from '../reducers/anecdoteReducer'
import { useSelector, useDispatch } from 'react-redux'
import Filter from './filter'
import { voteNotification } from '../reducers/notificationReducer'
const AnecdoteList = () => {
    const filter = useSelector(state => state.filter)
    const anecdotes = useSelector(state => {
        console.log(state.anecdote)
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
      const anecdote = anecdotes.find(x => x.id === id)
      dispatch(voteNotification(anecdote.content, 3))
      dispatch(vote({...anecdote, votes: anecdote.votes+1}))
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