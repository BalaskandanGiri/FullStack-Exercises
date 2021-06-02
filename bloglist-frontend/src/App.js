import React, { useState, useEffect } from 'react'
import Blog from './components/Blog'
import blogService from './services/blogService'
import loginService from './services/loginService' 
import Login from './components/login'
import CreateBlog from './components/createBlogs'
import Notification from './components/Notification'

const App = () => {
  const [blogs, setBlogs] = useState([])
  const [username, setUsername] = useState('') 
  const [password, setPassword] = useState('') 
  const [user, setUser] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState({message: null, type:'sucess'})

  useEffect(() => {
    const loggedUserJson = window.localStorage.getItem('loggedUser')
    console.log(loggedUserJson)
    if(loggedUserJson) {
      const user = JSON.parse(loggedUserJson)
      setUser(user)
      blogService.setToken(user.token)
      const t = async () => {
        setBlogs(await blogService.getAll())
      }
      t()
    }
  }, [isLoading])


  const handleLogin = async (event) => {
    event.preventDefault()
    console.log('logging in with', username, password)
    try {
      const user = await loginService.login({
        username, password,
      })
      blogService.setToken(user.token)
      setUser(user)
      window.localStorage.setItem(
        'loggedUser', JSON.stringify(user)
      )
      setUsername('')
      setPassword('')
      const temp = await blogService.getAll()
      setBlogs(temp)
    } catch (exception) {
      setErrorMessage({message:exception.response.data.error, type: 'error'})
      console.log(exception.response.data.error)
      setTimeout(() => {setErrorMessage({message:null, type: 'success'})},5000)
    }
  }

  const displayBlogs = () => {
    return (
      <>
        <h2>blogs</h2>
        <div>{user.username} logged in<button onClick={() => {window.localStorage.clear(); setUser(null)}}>logout</button></div>
        <br/>
        <CreateBlog isLoading={(bool) => setIsLoading(bool)} setMessage={(msg,ty) => {setErrorMessage({message:msg, type:ty});setTimeout(()=>{setErrorMessage({message:'',type:'success'})},5000) }}></CreateBlog>
        <br/>
        {blogs.map(blog =>
          <Blog key={blog.id} blog={blog} />
        )}
      </>
    )
  }

  return (
    <div>
      {errorMessage.message && <Notification message={errorMessage.message} type={errorMessage.type}></Notification>}
      {user === null && <Login handleLogin={(t) => handleLogin(t)} username={username} password={password} setUsername={(v) => setUsername(v)} setPassword={(v) => setPassword(v)}/>}
      {user !== null && displayBlogs()}
    </div>
  )
}

export default App