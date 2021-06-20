import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { usersInit } from '../Reducers/usersReducer'

const Users = () => {
    const users = useSelector(state => state.users)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(usersInit())
    }, [])
    const usersTable = users.map((x) => (<tr key={x.id}><td>{x.name}</td><td>{x.blogs.length}</td></tr>))

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