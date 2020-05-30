import React, { useContext, useState } from 'react';
import { Brand } from 'components/Brand';
import styled from 'styled-components';
import { Container } from 'components/Container';
import { StoreContext } from 'store/reducer';
import { Balance } from "components/Balance";
import { Link } from 'react-router-dom';
import { PopUp } from 'components/PopUp';
import { Button } from "components/Button";
import { Input } from "components/Input";

const Background = styled.div`
    background-color: var(--green);
`;

const Wrap = styled.div`
    display: flex;
    justify-content: space-between;
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

export const Navbar = props => {

    // setUser
    const { login, balance, clearUser } = useContext(StoreContext);
    
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

                                <Button 
                                    buttonProps={{ 
                                        margin: true,
                                          onClick: () => clearUser() 
                                    }}
                                    type="first"
                                >
                                        Выйти
                                </Button>
                              </UserWrap>

                            : <UserWrap>

                                <Button
                                    buttonProps={{
                                        onClick: handleShowLoginChange,
                                    }}
                                    type="first"
                                >
                                    Войти
                                </Button>

                                <Button
                                    buttonProps={{
                                        onClick: handleShowRegistrationChange,
                                    }}
                                    type="first"
                                >
                                    Зарегистрироваться
                                </Button>

                              </UserWrap>
                    }
                    <PopUp show={showLogin} backDropHandler={handleShowLoginChange}>
                        <Input type="text" placeholder="Логин"/>
                        <Input type="password" placeholder="Пароль"/>

                        <Button
                            variant="popup"
                            type="second"
                        >
                                Войти
                        </Button>

                    </PopUp>
                    <PopUp show={showRegistration} backDropHandler={handleShowRegistrationChange}>
                        <Input type="text" placeholder="Логин"/>
                        <Input type="password" placeholder="Пароль"/>

                        <Button 
                            variant="popup"
                            type="second"
                        >
                            Зарегистрироваться
                        </Button>

                    </PopUp>
                </Wrap>
            </Container>
        </Background>
    );
};
