import { SET_TOKEN, CLEAR_TOKEN } from "./types";

export const setUserAction = async (password, login, dispatch) => {
    // TODO request to server
    const token = password + login;

    dispatch({ type: SET_TOKEN, token, login, balance: 100 });
}

export const clearUserAction = () => {
    return { type: CLEAR_TOKEN };
}