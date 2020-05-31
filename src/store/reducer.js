import { SET_TOKEN, CLEAR_TOKEN } from "./types"
import { createContext } from "react";

const getted = localStorage.getItem("user");

const saved = getted === 0
    ? null
    : JSON.parse(getted);

    const initNotes = [
    { 
        title: 'Помогу с доставкой 1', 
        author: 'Муся Щека',
        price: "100",
        type: "1",
        id: '1',
        text: 'Разнообразный и богатый опыт постоянный количественный рост и сфера нашей активности играет важную роль в формировании существующих финансовых и административных условий. Повседневная практика показывает...'
    },
    { 
        title: 'Мне нужна помощь с доставкой! 2', 
        author: 'Муся Щека',
        price: "100",
        type: "2",
        id: '2',
        text: 'Разнообразный и богатый опыт постоянный количественный рост и сфера нашей активности играет важную роль в формировании существующих финансовых и административных условий. Повседневная практика показывает...'
    },
    { 
        title: 'Помогу с доставкой 3', 
        author: 'Муся Щека',
        price: "100",
        type: "1",
        id: '3',
        text: 'Разнообразный и богатый опыт постоянный количественный рост и сфера нашей активности играет важную роль в формировании существующих финансовых и административных условий. Повседневная практика показывает...'
    }, 
    { 
        title: 'Мне нужна помощь с доставкой! 4', 
        author: 'Муся Щека',
        price: "100",
        type: "2",
        id: '4',
        text: 'Разнообразный и богатый опыт постоянный количественный рост и сфера нашей активности играет важную роль в формировании существующих финансовых и административных условий. Повседневная практика показывает...'
    },
];

export const initState = {
    token: saved?.token,
    login: saved?.login,
    balance: saved?.balance,
    notes: initNotes,
}

export const StoreContext = createContext({
    token: initState.token,
    login: initState.login,
    balance: initState.balance,

    setUser: null,
    clearUser: null,
    notes: initNotes,
  });

export const storeReducer = (state = initState, action) => {
    console.log({...state});

    switch(action.type) {
        case SET_TOKEN:
            const {token, login, balance} = action;

            const user = {token, login, balance};
            console.log(login);

            localStorage.setItem("user", JSON.stringify(user));

            return {...state, ...user};
        case CLEAR_TOKEN:
            localStorage.setItem("user", null);

            return {...state, token: null, login: null, balance: null};
        default:
            return {...state};
    }
}