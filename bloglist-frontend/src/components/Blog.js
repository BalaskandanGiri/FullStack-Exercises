import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

const Blog = ({ blog, isLoading }) => {
    const dispatch = useDispatch()
    const userJSON = JSON.parse(window.localStorage.getItem('loggedUser'))
    const username = userJSON && userJSON.username

    const blogStyle = {
        paddingTop: 10,
        paddingLeft: 2,
        border: 'solid',
        borderWidth: 1,
        marginBottom: 5
    }

    const blogUsername = blog.user && blog.user.username

    return (
        <div style={blogStyle}>
            <Link to={'/blog/' + blog.id}>
                    Title: {blog.title}, Author: {blog.author}
            </Link>
        </div>
    )

}

export default Blog