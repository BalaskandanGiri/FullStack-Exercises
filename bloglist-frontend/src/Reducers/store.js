import { createStore } from 'redux'
import blogReducer from '../Reducers/blogReducer'

const store = createStore(blogReducer)

console.log(store.getState())

export default store