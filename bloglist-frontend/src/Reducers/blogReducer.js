import service from '../services/blogService'

const reducer = (state = [], action) => {
    console.log('state now: ', state)
    console.log('action', action)

    switch(action.type)  {
    case 'INIT':
        return action.data
    case 'createBlog':
        return [...state, action.data]
    case 'deleteBlog':
        return state.filter(blog => blog.id !== action.data.id)
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

export default reducer