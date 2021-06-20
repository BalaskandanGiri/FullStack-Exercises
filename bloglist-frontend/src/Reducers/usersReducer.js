import userService from '../services/userService'

const usersReducer = (state = [], actions) => {
    switch(actions.type) {
    case 'init':
        return actions.data
    default:
        return state
    }
}

export const usersInit = () => {
    return async dispatch => {
        const res = await userService.getUsers()
        console.log(res)
        dispatch({
            type: 'init',
            data: res
        })
    }
}

export default usersReducer