import service from '../services/blogService'

const reducer = (state = [], action) => {
    console.log('state now: ', state)
    console.log('action', action)

    switch(action.type)  {
    case 'INIT':
        return action.data
    case 'updateBlog':
        return state.map(blog => blog.id === action.data.id ? action.data : blog)
    case 'createBlog':
        return [...state, action.data]
    case 'deleteBlog':
        return state.filter(blog => blog.id !== action.data.id)
    case 'updateLikes':
        // eslint-disable-next-line no-case-declarations
        let blog = state.find(blog => blog.id === action.data.id)
        blog = { ...blog, likes: action.data.likes }
        return state.map(b => b.id === blog.id ? blog : b)
    default:
        return state
    }



}

export const blogInit = () => {
    return async dispatch => {
        const data = await service.getAll()
        dispatch({
            type: 'INIT',
            data: data
        })
    }

}

export const addBlog = (data) => {
    return async dispatch => {
        const resp = await service.create(data)
        dispatch({
            type: 'createBlog',
            data: resp
        })
    }
}

export const deleteBlog = (id) => {
    return async dispatch => {
        await service.deleteBlog(id)
        dispatch({
            type: 'deleteBlog',
            data: { id : id }
        })
    }
}

export const updateLikes = (blog) => {
    return async dispatch => {
        await service.change(blog)
        dispatch({
            type: 'updateLikes',
            data: blog
        })
    }
}

export const comment = (commentMsg, blogId) => {
    return async dispatch => {
        const response = await service.comment({ content: commentMsg }, blogId)
        console.log(response)
        dispatch({
            type: 'updateBlog',
            data: response
        })
    }

}

export default reducer