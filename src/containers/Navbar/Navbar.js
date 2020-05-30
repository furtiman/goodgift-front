import React, { useContext, useState } from 'react';
import { Brand } from 'components/Brand';
import styled, { css } from 'styled-components';
import { Container } from 'components/Container';
import { StoreContext } from 'store/reducer';
import { Balance } from "components/Balance";
import { Link } from 'react-router-dom';
import { PopUp } from 'components/PopUp';

const Background = styled.div`
    background-color: var(--green);
`;

const Wrap = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Button = styled.button`
    padding: 25px 7px 26px 8px;

    ${ props => props.margin && css`
        margin-left: 6px;
    ` }

    border: none;
    outline: none;
    cursor: pointer;

    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 29px;

    background-color: transparent;

    &:hover {
        background-color: var(--black);
        color: var(--white);
    }

    transition: all .2s;
`;

const UserWrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const User = styled(Link)`
    padding-right: 10px;

    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 29px;

    text-decoration: none;

    color: var(--black);

    transition: color .2s;

    &:hover {
        color: var(--white);
    }
`;
const Input = styled.input`
    max-width: 450px;

    font-size: 24px;
    font-weight: bold;
    line-height: 29px;
    color: #4C4947;
    background: #CECCCE;
    border: none;
    outline: none;

    padding: 15px 20px;
    margin-bottom: 15px;

    &::placeholder{
        color: #4C4947;
    }
`
const PopUpButton = styled.button`
    max-width: 450px;

    font-size: 24px;
    font-weight: normal;
    line-height: 29px;
    color: #EFEDEF;
    background: #222022;
    text-align: center;
    border: none;
    outline: none;
    transition: .2s;

    margin-top: 15px;
    padding: 15px 20px;

    &:hover{
        background: #6EAD3A;
    }
`

export const Navbar = props => {

    const { login, balance, clearUser, setUser } = useContext(StoreContext);
    
    const [showLogin, setShowLogin] = useState(false);
    const [showRegistration, setShowRegistration] = useState(false);

    function handleShowLoginChange() {
        if (showLogin) setShowLogin(false);
        if (!showLogin) setShowLogin(true);
      }
    function handleShowRegistrationChange() {
        if (showRegistration) setShowRegistration(false);
        if (!showRegistration) setShowRegistration(true);
      }

    return (
        <Background>
            <Container>
                <Wrap>
                    <Brand />

                    {
                        login 
                            ? <UserWrap>
                                <User to={`/ads/${login}`} >{login}</User>
                                <Balance value={balance} />
                                <Button margin onClick={() => clearUser()} >Выйти</Button>
                              </UserWrap>

                            : <UserWrap>
                                <Button onClick={handleShowLoginChange}>Войти</Button>
                                <Button onClick={handleShowRegistrationChange}>
                                    Зарегистрироваться
                                </Button>
                              </UserWrap>
                    }
                    <PopUp show={showLogin} backDropHandler={handleShowLoginChange}>
                        <Input type="text" placeholder="Логин"/>
                        <Input type="password" placeholder="Пароль"/>
                        <PopUpButton>Войти</PopUpButton>
                    </PopUp>
                    <PopUp show={showRegistration} backDropHandler={handleShowRegistrationChange}>
                        <Input type="text" placeholder="Логин"/>
                        <Input type="password" placeholder="Пароль"/>
                        <PopUpButton>Зарегистрироваться</PopUpButton>
                    </PopUp>
                </Wrap>
            </Container>
        </Background>
    );
};
