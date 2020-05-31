import React from 'react';
import styled from 'styled-components';

import { Page } from 'components/Page';
import { Note } from 'components/Note/';
import { Input } from 'components/Input';
import { Button } from 'components/Button';
import { Form } from 'components/Form';
import { AddNote } from 'components/AddNote';

const HomePage = styled(Page)`
    padding-bottom: 80px;
`
const HomeInput = styled(Input)`
    width: 100%;
    box-sizing: border-box;
    margin-bottom: 20px;
`
const RadioWrap = styled.div`
    width: 100%;

    display: flex;
    justify-content: space-between;    

    margin-bottom: 15px;
`
const Radio = styled.input`
    display: none;

    &:checked + label{
        background: var(--green);
    }
`
const RadioButton = styled.label`
    display: block;

    color: var(--white);
    background: var(--black);
    border: none;
    outline: none;
    cursor: pointer;
    text-align: center;
    font-weight: bold;
    font-size: 36px;
    line-height: 44px;
    transition: .2s;

    padding: 13px 105px;

    &:hover {
        background: var(--green);
    }
`
const Notes = [
    { title: 'Помогу с доставко', author: 'Муся Щека', price: "100", text: 'Разнообразный и богатый опыт постоянный количественный рост и сфера нашей активности играет важную роль в формировании существующих финансовых и административных условий. Повседневная практика показывает...', id: '1' },
    { title: 'Помогу с доставко', author: 'Муся Щека', price: "100", text: 'Разнообразный и богатый опыт постоянный количественный рост и сфера нашей активности играет важную роль в формировании существующих финансовых и административных условий. Повседневная практика показывает...', id: '2' },
    { title: 'Помогу с доставко', author: 'Муся Щека', price: "100", text: 'Разнообразный и богатый опыт постоянный количественный рост и сфера нашей активности играет важную роль в формировании существующих финансовых и административных условий. Повседневная практика показывает...', id: '3' },
    // { title: 'Помогу с доставко', author: 'Муся Щека', price: "100", text: 'Разнообразный и богатый опыт постоянный количественный рост и сфера нашей активности играет важную роль в формировании существующих финансовых и административных условий. Повседневная практика показывает...', id: '4' },
  ];

export const Home = props => {

    return (
        <HomePage>
            <Form>
                <HomeInput type="text" placeholder="Поиск..." />
                <RadioWrap>
                    <Radio id="want" type="radio" name="help" value="want"/>
                    <RadioButton htmlFor="want">Хочу помочь</RadioButton>
                    <Radio id="need" type="radio" name="help" value="need"/>
                    <RadioButton htmlFor="need">Нужна помощь</RadioButton>
                </RadioWrap>
            </Form>
            {Notes.map((note) => {  
                return (
                    <Note
                        title={note.title}
                        author={note.author}
                        price={note.price}
                        text={note.text}
                        key={note.id}
                        id={note.id}
                    />
                );
            })}
            <AddNote />
        </HomePage>
        
    );
};