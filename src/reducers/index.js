import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import login from './login'
import chatContent from './chatContent'

const rootReducer = (history) => combineReducers({
    login,chatContent,
    router: connectRouter(history)
})

export default rootReducer
