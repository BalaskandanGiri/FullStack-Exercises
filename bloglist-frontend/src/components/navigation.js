import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
const Navigation = () => {
    const dispatch = useDispatch()
    const user = useSelector(state => state.user)
    const navStyle = {
        backgroundColor: '#d4d4d4',
        height: '25px',
        alignItems: 'center',
        display: 'flex'
    }
    return(
        <div style={navStyle}>
            &nbsp;&nbsp;
            <Link to='/'>blogs</Link>&nbsp;&nbsp;
            <Link to='users'>users</Link>&nbsp;&nbsp;
            {user !== null && <span>{user.username} logged in<button onClick={() => {window.localStorage.clear(); dispatch({ type: 'removeUser' })}}>logout</button></span>}
        </div>
    )
}

export default Navigation