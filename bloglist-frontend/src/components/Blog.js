import React, {useState} from 'react'
import blogService from '../services/blogService'

const Blog = ({blog, isLoading}) => {
  const [show, setShow] = useState(false)

  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 5
  }

  const updateLikes = async (blog) => {
    isLoading(true)
    const b = {...blog, likes: blog.likes + 1}
    const updatedBlog = await blogService.change(b)
    console.log(updatedBlog)
    isLoading(false)
  }

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
        <p>url: {blog.url}</p>
        <p>likes: {blog.likes} &nbsp;<button onClick={() => updateLikes(blog)}>like</button></p>
      </div>
    )
  }
}

export default Blog