const notificationReducer = (state = [], action) => {
    switch(action.type) {
    case 'newNotification':
        console.log(action)
        return action.data
    case 'removeNotification':
        return { ...state, message: null }
    default:
        return state
    }
}

export const newNotification = (data) => {
    return {
        type: 'newNotification',
        data: data
    }
}

export const removeNotification = () => {
    return {
        type: 'removeNotification'
    }
}

export default notificationReducer