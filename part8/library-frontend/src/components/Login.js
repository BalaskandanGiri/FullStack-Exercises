import React, {useEffect, useState} from 'react'
import { useMutation } from '@apollo/client'
import { LOGIN } from '../queries'

const Login = ({show, setToken, setError}) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const [login, result] = useMutation(LOGIN, {
        onError: (error) => {
            console.log(error)
            setError(error)
        }
    })

    useEffect(() => {
        if(result.data) {
            const token = result.data.login.value
            console.log(token)
            setToken(token)
            localStorage.setItem('token', token)
        }
    }, [result.data])

    if (!show) {
        return null
    }

    const submit = (event) => {
        event.preventDefault()
        login({variables: {username,password}})
    }

    return (
        <div>
            <form onSubmit={submit}>
                <div>
                    username <input value={username} onChange={({target})=> setUsername(target.value)}></input>
                </div>
                <div>
                    password <input value={password} onChange={({target})=> setPassword(target.value)}></input>
                </div>
                <button type="submit">login</button>
            </form>
        </div>
    )
}

export default Login