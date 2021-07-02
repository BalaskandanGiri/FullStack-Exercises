
import React, { useState } from 'react'
import Authors from './components/Authors'
import Books from './components/Books'
import NewBook from './components/NewBook'
import Login from './components/Login'
import Recommendations from './components/Recommendations'
import { ADDED_BOOK, ADD_BOOK, ALL_AUTHORS, ALL_BOOKS } from './queries'
import { useQuery, useApolloClient, useSubscription } from '@apollo/client'

const App = () => {
  const [page, setPage] = useState('authors')
  const result = useQuery(ALL_AUTHORS)
  const res = useQuery(ALL_BOOKS) 
  const [token, setToken] = useState(localStorage.getItem("token")) 
  const [error, setError] = useState("")
  const client = useApolloClient()

  useSubscription(ADDED_BOOK, {
      onSubscriptionData: ({subscriptionData}) => {
          console.log(subscriptionData)
          window.alert(subscriptionData.data)
      }
  })

  if (result.loading || res.loading)  {
    return <div>loading...</div>
  }
  console.log(result, res)

  const logout = () => {
    setToken(null)
    localStorage.clear()
    client.resetStore()
  }

  return (
    <div>
        <div>
            <button onClick={() => setPage('authors')}>authors</button>
            <button onClick={() => setPage('books')}>books</button>
            {token ? <button onClick={() => setPage('add')}>add book</button> : null}
            {token ? <button onClick={() => setPage('recommendations')}>Recommendations</button> : null}
            {token ? <button onClick={() => logout()} >logout</button>: <button onClick={() => {setPage('login')}}>login</button>}
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
        <Recommendations
            show={page==='recommendations'}
        />
        
        <Login show={page === 'login'} setToken={(token) => setToken(token)} setError={(error) => setError(error)}></Login>
      

    </div>
  )
}

export default App