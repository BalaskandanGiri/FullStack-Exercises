import React, { useState } from 'react'
import { addBlog } from '../Reducers/blogReducer'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import { newNotification, removeNotification } from '../Reducers/notificationReducer'


const CreateBlog = (props) => {
    const dispatch = useDispatch()
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [url, setUrl] = useState('')
    const handleLogin = async(e) => {
        e.preventDefault()
        try {
            props.isLoading(true)
            dispatch(addBlog({ 'title': title, 'author': author, 'url': url }))
            setUrl('');setAuthor('');setTitle('')
            dispatch(newNotification({ message: 'Created Blog successfully', type: 'success' }))
            setTimeout(() => {
                dispatch(removeNotification())
            }, 5000)
            props.isLoading(false)
        } catch(ex) {
            props.setMessage('Blog creation failed', 'error')
            props.isLoading(false)
        }

    }

    return (
        <form onSubmit={(t) => handleLogin(t)}>
            <div>
              title
                <input
                    id="title"
                    type="text"
                    value={title}
                    name="title"
                    onChange={({ target }) => setTitle(target.value)}
                />
            </div>
            <div>
              author
                <input
                    id="author"
                    type="text"
                    value={author}
                    name="author"
                    onChange={({ target }) => setAuthor(target.value)}
                />
            </div>
            <div>
              url
                <input
                    id="url"
                    type="text"
                    value={url}
                    name="url"
                    onChange={({ target }) => setUrl(target.value)}
                />
            </div>
            <button id="createButton" type="submit">Create</button>
            <button onClick={() => {props.setShowCreate()}}>Cancel</button>
        </form>
    )
}
CreateBlog.prototype = {
    isLoading: PropTypes.func,
    setShowCreate: PropTypes.func,
    setMessage: PropTypes.func
}

export default CreateBlog