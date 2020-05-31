import React, { useContext, useState } from 'react';
import styled, {css} from 'styled-components';

import { Brand } from 'components/Brand';
import { Container } from 'components/Container';
import { StoreContext } from 'store/reducer';
import { Balance } from "components/Balance";
import { Link } from 'react-router-dom';
import { PopUp } from 'components/PopUp';
import { PopUpForm } from 'containers/PopUpForm';

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

const NavButton = styled.button`
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

export const Navbar = props => {
    const { login, balance, clearUser } = useContext(StoreContext);
    
    const [showLogin, setShowLogin] = useState(false);
    const [showReg, setShowReg] = useState(false);

    function showLoginHandler() {
        if (showLogin) setShowLogin(false);
        if (!showLogin) setShowLogin(true);
      }

    function showRegHandler() {
        if (showReg) setShowReg(false);
        if (!showReg) setShowReg(true);
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

                                <NavButton margin onClick={() => clearUser() } >
                                        Выйти
                                </NavButton>
                              </UserWrap>

                            : <UserWrap>

                                <NavButton onClick={showLoginHandler} >
                                    Войти
                                </NavButton>

                                <NavButton onClick={showRegHandler} >
                                    Зарегистрироваться
                                </NavButton>

                              </UserWrap>
                    }

                    <PopUp show={showLogin} backDropHandler={showLoginHandler}>
                        <PopUpForm type="login" closeHandler={showLoginHandler} />
                    </PopUp>

                    <PopUp show={showReg} backDropHandler={showRegHandler}> 
                        <PopUpForm type="register" closeHandler={showRegHandler} />
                    </PopUp>

                </Wrap>
            </Container>
        </Background>
    );
};
