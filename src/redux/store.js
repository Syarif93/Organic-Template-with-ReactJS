import { combineReducers, createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import uiReducer from './reducers/uiReducer'

const initialState = {}

const middleWare = [thunk]

const reducers = combineReducers({
    UI: uiReducer
})

const store = createStore(
    reducers,
    initialState,
    compose(
        applyMiddleware(...middleWare), 
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
)

export default store