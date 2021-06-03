import React, {useState} from 'react'
const Blog = ({blog}) => {
  const [show, setShow] = useState(false)

  if (!show) {
    return (
      <div>
      Title: {blog.title}, Author: {blog.author} <button onClick={() => {setShow(true)}}>view</button>
      </div> 
    )
  } else {
    return(
      <div>
        <p>Title: {blog.title}<button onClick={() => {setShow(false)}}>hide</button></p> 
        <p>Author: {blog.author}</p>
        <p>url: {blog.url}</p>
        <p>likes: {blog.likes}</p>
      </div>
    )
  }
}

export default Blog