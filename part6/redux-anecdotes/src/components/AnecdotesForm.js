import React from 'react'
import {createAnecdote} from '../reducers/anecdoteReducer'
import { useDispatch } from 'react-redux'
import service from '../services/anecdotes'

const AnecdoteForm = () => {

    const dispatch = useDispatch()

    const addAnecdote = (event) => {
        event.preventDefault()
        const anecdote = event.target.anecdote.value
        service.create(anecdote).then(anecdote => {
            event.target.anecdote.value = ''
            dispatch(createAnecdote(anecdote))
        })

      }

    return (
        <div>
            <h2>create new</h2>
            <form onSubmit={addAnecdote}>
            <div><input type="text" name="anecdote"/></div>
            <button>create</button>
            </form>
        </div>
    )
}

export default AnecdoteForm