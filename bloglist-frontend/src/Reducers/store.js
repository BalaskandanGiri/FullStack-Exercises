import { createStore, applyMiddleware, combineReducers } from 'redux'
import blogReducer from '../Reducers/blogReducer'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import notificationReducer from './notificationReducer'
import userReducer from './userReducer'

const reducers = combineReducers(
    {
        'blogs': blogReducer,
        'notifications':  notificationReducer,
        'user': userReducer
    }
)

const store = createStore(reducers,
    composeWithDevTools(
        applyMiddleware(thunk)
    ))

console.log(store)

export default store