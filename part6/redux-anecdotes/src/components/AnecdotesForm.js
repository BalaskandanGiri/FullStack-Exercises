import React from 'react'
import {createAnecdote} from '../reducers/anecdoteReducer'
import { connect } from 'react-redux'

const AnecdoteForm = (props) => {


    const addAnecdote = (event) => {
        event.preventDefault()
        const anecdote = event.target.anecdote.value
        props.createAnecdote(anecdote)
        event.target.anecdote.value = ''
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

const mapStatetoProps = (state) => {
	return {
		notification: state.notification,
	}
}

const mapDispatchToProps = {
    createAnecdote
}


const connectedAnecdoteForm = connect(mapStatetoProps, mapDispatchToProps)(AnecdoteForm)
export default connectedAnecdoteForm
