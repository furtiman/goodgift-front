import { SET_TOKEN, CLEAR_TOKEN } from "./types"

export const initState = {
    token: localStorage.getItem("token") === 0 ? null : localStorage.getItem("token"),
}

export const storeReducer = (state = initState, action) => {
    console.log({...state});

    switch(action.type) {
        case SET_TOKEN:
            return {...state, token: action.token};
        case CLEAR_TOKEN:
            return {...state, token: null};
        default:
            return {...state};
    }
}