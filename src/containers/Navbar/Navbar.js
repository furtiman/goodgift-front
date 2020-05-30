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

export const Navbar = props => {

    const { login, balance, clearUser, setUser } = useContext(StoreContext);
    
    const [show, setShow] = useState(false);

    function handleStatusChange() {
        if (show) setShow(false);
        if (!show) setShow(true);
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
                                <Button onClick={() => setUser({login: "tatata", password: "graa"})}  >Войти</Button>
                                <Button onClick={handleStatusChange}>
                                    Зарегистрироваться
                                </Button>
                              </UserWrap>
                    }
                    <PopUp show={show} backDropHandler={handleStatusChange}>

                    </PopUp>
                </Wrap>
            </Container>
        </Background>
    );
};
