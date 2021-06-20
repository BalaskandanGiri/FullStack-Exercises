import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router'
const UserDetails = () => {
    const users = useSelector(state => state.users)
    if (users.length === 0) {
        return null
    }
    const id = useParams().id
    const user = users.find(u => u.id === id)
    return (
        <>
            <h1>{user.name}</h1>
            <h3>added blogs</h3>
            <ul>{user.blogs.map(b => (<li key={b.id}>{b.title}</li>))}</ul>
        </>
    )
}

export default UserDetails