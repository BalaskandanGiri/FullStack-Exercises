import React from 'react'

const login = (props) => {
    return (
        <form onSubmit={(t) => props.handleLogin(t)}>
            <div>
          username
                <input
                    id="username"
                    type="text"
                    value={props.username}
                    name="Username"
                    onChange={({ target }) => props.setUsername(target.value)}
                />
            </div>
            <div>
                password
                <input
                    id="password"
                    type="password"
                    value={props.password}
                    name="Password"
                    onChange={({ target }) => props.setPassword(target.value)}
                />
            </div>
            <button type="submit">login</button>
        </form>
    )
}

export default login