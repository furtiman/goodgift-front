import { SET_TOKEN, CLEAR_TOKEN } from "./types"
import { createContext } from "react";

const getted = localStorage.getItem("user");

const saved = getted === 0
    ? null
    : JSON.parse(getted);

export const initState = {
    token: saved?.token,
    login: saved?.login,
    balance: saved?.balance,
}

export const StoreContext = createContext({
    token: initState.token,
    login: initState.login,
    balance: initState.balance,

    setUser: null,
    clearUser: null,
  });

export const storeReducer = (state = initState, action) => {
    console.log({...state});

    switch(action.type) {
        case SET_TOKEN:
            const {token, login, balance} = action;

            const user = {token, login, balance};

            localStorage.setItem("user", JSON.stringify(user));

            return {...state, ...user};
        case CLEAR_TOKEN:
            localStorage.setItem("user", null);

            return {...state, token: null, login: null, balance: null};
        default:
            return {...state};
    }
}