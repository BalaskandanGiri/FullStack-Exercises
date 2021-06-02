import React, {useState} from 'react'
import blogService from '../services/blogService'


const CreateBlog = (props) => {
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [url, setUrl] = useState('')
    const handleLogin = async(e) => {
        e.preventDefault()
        try {
            props.isLoading(true);
            const createBlog = await blogService.create({"title": title, "author": author, "url": url})
            console.log(createBlog)
            setUrl('');setAuthor('');setTitle('')
            props.setMessage('Created Blog successfully', 'success')
            props.isLoading(false)
        } catch(ex) {
            props.setMessage('Blog creation failed', 'error')
            props.isLoading(false);
        }

    }

    return (
        <form onSubmit={(t) => handleLogin(t)}>
            <div>
              title
                <input
                type="text"
                value={title}
                name="title"
                onChange={({ target }) => setTitle(target.value)}
              />
            </div>
            <div>
              author
                <input
                type="text"
                value={author}
                name="author"
                onChange={({ target }) => setAuthor(target.value)}
              />
            </div>
            <div>
              url
                <input
                type="text"
                value={url}
                name="url"
                onChange={({ target }) => setUrl(target.value)}
              />
            </div>
            <button type="submit">Create</button>
            <button onClick={() => {props.setShowCreate()}}>Cancel</button>
          </form>
        )
}

export default CreateBlog