import React, { useState } from 'react';
import styled from 'styled-components';

import { Page } from 'components/Page';
import { Form } from 'components/Form';
import { Input } from 'components/Input';
import { AddNote } from 'components/AddNote/AddNote';
import { SwitchForm } from 'containers/SwitchForm';

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

export const CreateContainer = props => {

    // radio
    const [type, setType] = useState("1");
    const radioChanger = text => e => {
        setType(text);
    };


    return (
        <Form>
            <CreateInput placeholder="Название"/>
            <SwitchForm variant="home" changeFunc={radioChanger} type={type}/>
            <Text placeholder="Опишите вашу проблему"/>
            <AddNote />
        </Form>
    );
};
