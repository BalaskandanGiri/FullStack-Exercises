
import React, { useState } from 'react'
import Authors from './components/Authors'
import Books from './components/Books'
import NewBook from './components/NewBook'
import { ALL_AUTHORS, ALL_BOOKS } from './queries'
import { useQuery } from '@apollo/client'

const App = () => {
  const [page, setPage] = useState('authors')
  const result = useQuery(ALL_AUTHORS)
  const res = useQuery(ALL_BOOKS) 
  if (result.loading || res.loading)  {
    return <div>loading...</div>
  }
  console.log(result)

  return (
    <div>
      <div>
        <button onClick={() => setPage('authors')}>authors</button>
        <button onClick={() => setPage('books')}>books</button>
        <button onClick={() => setPage('add')}>add book</button>
      </div>

      <Authors
        show={page === 'authors'} authors={result.data.allAuthors}
      />

      <Books
        show={page === 'books'} books = {res.data.allBooks}
      />

      <NewBook
        show={page === 'add'}
      />

    </div>
  )
}

export default App