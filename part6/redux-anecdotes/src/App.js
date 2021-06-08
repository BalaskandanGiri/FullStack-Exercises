import React from 'react'
import AnecdoteForm from './components/AnecdotesForm'
import AnecdoteList from './components/AnecdoteList'

const App = () => {
  return (
    <div>
      <AnecdoteList></AnecdoteList>
      <AnecdoteForm></AnecdoteForm>
    </div>
  )
}

export default App