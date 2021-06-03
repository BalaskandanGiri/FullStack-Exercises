import React, { useState } from 'react'
import blogService from '../services/blogService'

const Blog = ({ blog, isLoading }) => {
    const [show, setShow] = useState(false)
    const userJSON = JSON.parse(window.localStorage.getItem('loggedUser'))
    const username = userJSON.username
    const blogStyle = {
        paddingTop: 10,
        paddingLeft: 2,
        border: 'solid',
        borderWidth: 1,
        marginBottom: 5
    }
    const deleteButtonStyle = {
        background: 'red',
        borderRadius: 30,
    }

    const updateLikes = async (blog) => {
        isLoading(true)
        const b = { ...blog, likes: blog.likes + 1 }
        const updatedBlog = await blogService.change(b)
        console.log(updatedBlog)
        isLoading(false)
    }

    const deleteBlog = async () => {
        if (window.confirm(`Are you sure you want to delete ${blog.title}`)) {
            isLoading(true)
            await blogService.deleteBlog(blog.id)
            isLoading(false)
        }

    }

    const blogUsername = blog.user && blog.user.username
    const deleteButton = blogUsername === null ? null : blogUsername === username ? <button onClick={() => {deleteBlog()}} style={deleteButtonStyle}>delete</button> : null
    if (!show) {
        return (
            <div style={blogStyle}>
      Title: {blog.title}, Author: {blog.author} <button onClick={() => {setShow(true)}}>view</button>
            </div>
        )
    } else {
        return(
            <div style={blogStyle}>
                <p>Title: {blog.title} &nbsp;<button onClick={() => {setShow(false)}}>hide</button></p>
                <p>Author: {blog.author}</p>
                <p>url: <a href={blog.url} >{blog.url}</a></p>
                <p>likes: {blog.likes} &nbsp;<button onClick={() => updateLikes(blog)}>like</button></p>
                {deleteButton}
            </div>
        )
    }
}

export default Blog