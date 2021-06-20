import React, { useState, useEffect } from 'react'
import Blog from './components/Blog'
import blogService from './services/blogService'
import loginService from './services/loginService'
import Login from './components/login'
import CreateBlog from './components/createBlogs'
import Notification from './components/Notification'
import { useDispatch, useSelector } from 'react-redux'
import { blogInit } from './Reducers/blogReducer'
import { newNotification, removeNotification } from './Reducers/notificationReducer'
import { setUser } from './Reducers/userReducer'
import { BrowserRouter as Router, Link, Route, Switch, useRouteMatch, useHistory } from 'react-router-dom'
import Users from './components/users'

const App = () => {
    // const [blogs, setBlogs] = useState([])
    const blogs = useSelector(state => state.blogs)
    const errorMessage = useSelector(state => state.notifications)
    const user = useSelector(state => state.user)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [showCreate, setShowCreate] = useState(false)
    const dispatch = useDispatch()
    useEffect(() => {
        const loggedUserJson = window.localStorage.getItem('loggedUser')
        console.log(loggedUserJson)
        if(loggedUserJson) {
            const user = JSON.parse(loggedUserJson)
            dispatch(setUser(user))
            blogService.setToken(user.token)
            dispatch(blogInit())
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
            dispatch(setUser(user))
            window.localStorage.setItem(
                'loggedUser', JSON.stringify(user)
            )
            setUsername('')
            setPassword('')
            dispatch(blogInit())
        } catch (exception) {
            dispatch(newNotification({ message:exception.response.data.error, type: 'error' }))
            console.log(exception.response.data.error)
            setTimeout(() => dispatch(removeNotification()),5000)
        }
    }

    const createBlog = () => {
        if (!showCreate) {
            return <button onClick={() => {setShowCreate(true)}}>Create new Blog</button>
        } else {
            return <CreateBlog isLoading={
                (bool) => setIsLoading(bool)}
            setShowCreate={() => {setShowCreate(false)}}>
            </CreateBlog>
        }
    }

    const displayBlogs = () => {
        return (
            <>
                <br/>
                {createBlog()}
                <br/>
                {blogs.map(blog =>
                    <Blog key={blog.id} blog={blog} isLoading={(bool) => setIsLoading(bool)}/>
                )}
            </>
        )
    }

    return (
        <div>
            {errorMessage.message && <Notification message={errorMessage.message} type={errorMessage.type}></Notification>}
            <h2>blogs</h2>
            {user === null && <Login handleLogin={(t) => handleLogin(t)} username={username} password={password} setUsername={(v) => setUsername(v)} setPassword={(v) => setPassword(v)}/>}
            {user !== null && <div>{user.username} logged in<button onClick={() => {window.localStorage.clear(); dispatch({ type: 'removeUser' })}}>logout</button></div>}
            <Router>
                <Switch>
                    <Route path='/users'>
                        <Users></Users>
                    </Route>
                    <Route path='/'>
                        {user !== null && displayBlogs()}
                    </Route>
                </Switch>
            </Router>

        </div>
    )
}

export default App