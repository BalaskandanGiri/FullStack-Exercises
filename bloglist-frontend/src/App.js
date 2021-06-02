import React, { useState, useEffect } from 'react'
import Blog from './components/Blog'
import blogService from './services/blogService'
import loginService from './services/loginService' 
import Login from './components/login'
import login from './components/login'


const App = () => {
  const [blogs, setBlogs] = useState([])
  const [username, setUsername] = useState('') 
  const [password, setPassword] = useState('') 
  const [user, setUser] = useState(null)

  const handleLogin = async (event) => {
    event.preventDefault()
    console.log('logging in with', username, password)
    try {
      const user = await loginService.login({
        username, password,
      })
      blogService.setToken(user.token)
      setUser(user)
      setUsername('')
      setPassword('')
      const temp = await blogService.getAll()
      setBlogs(temp)
    } catch (exception) {
      console.log(exception)
    }
  }

  const displayBlogs = () => {
    return (
      <>
        <h2>blogs</h2>
        <div>{user.username} logged in</div>
        <br/>
        {blogs.map(blog =>
          <Blog key={blog.id} blog={blog} />
        )}
      </>
    )
  }

  return (
    <div>
      {/* {user === null && login} */}
      {user === null && <Login handleLogin={(t) => handleLogin(t)} username={username} password={password} setUsername={(v) => setUsername(v)} setPassword={(v) => setPassword(v)}/>}
      {user !== null && displayBlogs()}
    </div>
  )
}

export default App