const userReducer = (state = null, action) => {
    switch(action.type) {
    case 'setUser':
        return action.data
    case 'removeUser':
        return null
    default:
        return state
    }
}

export const setUser = (data) => {
    return {
        type: 'setUser',
        data: data
    }
}

export default userReducer