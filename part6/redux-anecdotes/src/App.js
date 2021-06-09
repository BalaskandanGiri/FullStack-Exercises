import React, { useEffect } from 'react'
import AnecdoteForm from './components/AnecdotesForm'
import AnecdoteList from './components/AnecdoteList'
import Notification from './components/Notification'
import { useDispatch } from 'react-redux'
import service from './services/anecdotes'
import {init} from './reducers/anecdoteReducer'

const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    service.getAll().then(notes => dispatch(init(notes)))
  },[dispatch])

  return (
    <div>
      <Notification></Notification>
      <AnecdoteList></AnecdoteList>
      <AnecdoteForm></AnecdoteForm>
    </div>
  )
}

export default App