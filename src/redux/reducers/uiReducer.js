import { SET_AUTH_UI, REMOVE_AUTH_UI } from '../types'

const initialState = {
    authUi: false
}

export default function(state = initialState, action) {
    switch (action.type) {
        case SET_AUTH_UI:
            return {
                ...state,
                authUi: true
            }
        case REMOVE_AUTH_UI:
            return {
                ...state,
                authUi: false
            }
        default:
            return state
    }
}