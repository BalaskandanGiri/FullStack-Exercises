import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { usersInit } from '../Reducers/usersReducer'
import { Link } from 'react-router-dom'

const Users = () => {
    const users = useSelector(state => state.users)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(usersInit())
    }, [])
    const usersTable = users.map((x) => (<tr key={x.id}><Link to={`/users/${x.id}`}><td>{x.name}</td></Link><td>{x.blogs.length}</td></tr>))

    return (
        <>
            <table>
                <thead><tr><td>Name</td><td>Blogs</td></tr></thead>
                <tbody>
                    {usersTable}
                </tbody>
            </table>
        </>
    )
}

export default Users