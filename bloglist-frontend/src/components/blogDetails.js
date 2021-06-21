import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router'
import { comment, deleteBlog as delBlog, updateLikes as update } from '../Reducers/blogReducer'

const BlogDetail = () => {
    const id = useParams().id
    const userJSON = JSON.parse(window.localStorage.getItem('loggedUser'))
    const username = userJSON && userJSON.username
    const blogs = useSelector(state => state.blogs)
    const blog = blogs.find(b => b.id === id)
    const dispatch = useDispatch()
    const blogStyle = {
        paddingTop: 10,
        paddingLeft: 2,
        border: 'solid',
        borderWidth: 1,
        marginBottom: 5
    }
    const deleteBlog = async () => {
        if (window.confirm(`Are you sure you want to delete ${blog.title}`)) {
            dispatch(delBlog(blog.id))
        }

    }

    const deleteButton = blog.username === null ? null : blog.username === username ? <button onClick={() => {deleteBlog()}} style={deleteButtonStyle}>delete</button> : null

    const deleteButtonStyle = {
        background: 'red',
        borderRadius: 30,
    }

    const updateLikes = async (blog) => {
        const b = { ...blog, likes: blog.likes + 1 }
        dispatch(update(blog))
    }

    const postComment = () => {
        const inp = document.getElementById('commentInput').value
        dispatch(comment(inp,blog.id))
        document.getElementById.value = ''
    }

    return (
        <>
            <div style={blogStyle}>
                <p>Title: {blog.title} &nbsp;</p>
                <p>Author: {blog.author}</p>
                <p>url: <a href={blog.url} >{blog.url}</a></p>
                <p id="likes">likes: {blog.likes} &nbsp;<button onClick={() => updateLikes(blog)}>like</button></p>
                {deleteButton}
                <input id="commentInput"></input><button onClick={() => {postComment()}}>add</button>
                <h3>Comments</h3>
                {blog.comments.length > 0?blog.comments.map(c => <li key={c.id}>{c.content}</li>):<p>No comments</p>}
            </div>
        </>
    )
}

export default BlogDetail