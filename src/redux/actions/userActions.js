import { SET_AUTH_UI, REMOVE_AUTH_UI } from '../types'

export const setAuthUi = () => (dispatch) => {
    dispatch({ type: SET_AUTH_UI })
}

export const removeAuthUi = () => (dispatch) => {
    dispatch({ type: REMOVE_AUTH_UI })
}