import React, { useState, useContext } from 'react';
import { Input } from 'components/Input';
import { Button } from "components/Button";
import { Form } from "components/Form";
import { StoreContext } from 'store/reducer';

export const PopUpForm = props => {

    const {type, closeHandler} = props;

    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");

    const { setUser } = useContext(StoreContext);
    
    const submitHandler = e => {
        if( login === "" || password === "" ) return;

        // TODO: work with server
        if( type === "login" ) {
            setUser({login, password});
        }

        if( type === "register" ) {
            setUser({login, password});
        }

        closeHandler();
    }

    return (
        <Form onSubmit={submitHandler} >
            <Input 
                type="text" 
                minLength="3" 
                placeholder="Логин" 
                value={login}
                onChange={ e => setLogin(e.target.value) }
            />

            <Input 
                type="password" 
                minLength="3" 
                placeholder="Пароль" 
                value={password}
                onChange={e => setPassword(e.target.value)}
            />

            {
                type === "register" && <Button variant="popup">
                    Зарегистрироваться
                </Button>
            }
            {
                type === "login" && <Button variant="popup">
                    Войти
                </Button>
            }
        </Form>
    )
};