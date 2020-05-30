import React from 'react';
import { Input } from 'components/Input';
import { Button } from "components/Button";

export const PopUpForm = props => {

    const {type} = props;
    
    return (
        <>
            <Input type="text" placeholder="Логин" />
            <Input type="password" placeholder="Пароль" />

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
        </>
    )
};