import React, { useContext } from 'react';
import { Page } from 'components/Page';
import styled from 'styled-components';
import { Button } from 'components/Button';
import { StoreContext } from 'store/reducer';

const Title = styled.h3`
    margin: 0;
    padding: 0 0 15px 0;

    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    line-height: 44px;

    color: var(--black);
`;

const Author = styled.h4`
    margin: 0;
    padding: 0 0 40px 0;

    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 29px;

    color: var(--gray);
`;

const Text = styled.p`
    margin: 0;
    padding: 0 0 55px 0;

    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 22px;

    color: var(--black);
`;

const ButtonWrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const AdButton = styled(Button)`
    padding: 24px 92px;

    color: var(--black);
    background-color: var(--light-gray);

    &: hover {
        color: var(--black);
        background-color: var(--light-gray);
    }

    cursor: not-allowed;
`;

export const Ad = props => {
    const {match} = props;
    const {id} = match.params;

    const {notes} = useContext(StoreContext);
    const {title, author, text} = notes.find( note => note.id === id );

    const clickHandler = e => {
        //TODO work with server

        console.log("request to author...")
    }

    return (
        <Page>
            <Title>{title}</Title>
            <Author>{author}</Author>
            <Text>{text}</Text>
            
            <ButtonWrap>
                <AdButton onClick={clickHandler} >Ответить автору</AdButton>
            </ButtonWrap>
        </Page>
    );
};
