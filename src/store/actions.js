import { SET_TOKEN, CLEAR_TOKEN } from "./types";

export const setUserAction = async (password, login, dispatch) => {
    // TODO request to server
    const token = password + login;

    console.log(token,{ type: SET_TOKEN, token } );
    // TODO local storage set item
    dispatch({ type: SET_TOKEN, token });
}

export const clearUserAction = () => {
    // TODO clear local storage
    return { type: CLEAR_TOKEN };
}