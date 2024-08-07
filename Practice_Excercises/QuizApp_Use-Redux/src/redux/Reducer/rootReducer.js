import { combineReducers } from "redux"
import userReducer from './userReducer'
import quizReducer from './quizReducer'

const rootReducer = combineReducers({
    user: userReducer , 
    quiz : quizReducer
})

export default rootReducer