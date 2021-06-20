import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { usersInit } from '../Reducers/usersReducer'

const Users = () => {
    const users = useSelector(state => state.users)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(usersInit())
    }, [])
    return (
        <h1></h1>
    )
}

export default Users