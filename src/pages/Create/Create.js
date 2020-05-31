import React, { useState } from 'react';
import styled from 'styled-components';

import { Page } from 'components/Page';
import { Form } from 'components/Form';
import { Input } from 'components/Input';
import { SwitchForm } from 'containers/SwitchForm';
import { Button } from 'components/Button';
import { Notification } from "components/Notification";

const CreateInput = styled(Input)`
    width: 100%;
    margin-bottom: 20px;
`
const Text = styled.textarea`
    width: 100%;
    height: calc(100vh - 375px);

    display: block;

    font-family: Montserrat, sans-serif;
    font-size: 24px;
    font-weight: bold;
    line-height: 29px;
    color: var(--gray);
    background-color: var(--light-gray);
    border: none;
    outline: none;
    resize: none;

    padding: 15px 20px;

    &::placeholder{
        color: var(--gray);
    }
`

const AddItem = styled(Button)`
    width: 100%;

    background-color: var(--gray);
`;

const Message = styled.div`
    background-color: var(--light-gray);
    padding: 5px;

    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
`;

let innerTitle = "";
let innerText = ""; 

export const Create = props => {

    // radio
    const [type, setType] = useState("1");
    const radioChanger = text => e => {
        setType(text);
    };

    const [title, setTitle] = useState("");
    const [text, setText] = useState("");

    const [show, setShow] = useState(false);

    const sumbmitHandler = e => {
        if( title === "" || text === "" ) return;
        if( title === innerTitle || text === innerText ) return;
        // TODO work with server

        setShow(true);
        innerText = text;
        innerTitle = title;
        setTimeout(() => setShow(false), 3000);
    }

    return (
        <Page>
            <Form onSubmit={sumbmitHandler} >
                <CreateInput 
                    placeholder="Название" 
                    minLength={5} 
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                />

                <SwitchForm variant="home" changeFunc={radioChanger} type={type}/>

                <Text 
                    placeholder="Опишите вашу проблему" 
                    minLength={20} 
                    value={text}
                    onChange={e => setText(e.target.value)}
                />

                <AddItem>Создать</AddItem>

                <Notification show={show} >
                    <Message>Успешно!</Message>
                </Notification>
            </Form>
        </Page>
    );
};
