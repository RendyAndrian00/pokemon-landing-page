import { combineReducers } from 'redux'
import listsToDo from './listsToDo'
import { reducer as formReducer } from 'redux-form'

export default combineReducers({
    listsToDo,
    form: formReducer
    // form: formReducer
})