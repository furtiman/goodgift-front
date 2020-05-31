import React, { useContext } from 'react';
import styled from 'styled-components';

import { Page } from 'components/Page';
import { Note } from 'components/Note/';
import { Input } from 'components/Input';
import { Form } from 'components/Form';
import { AddNote } from 'components/AddNote';
import { NameContext } from 'components/Form';
import { Radio } from 'components/Radio/Radio';

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

const Notes = [
    { title: 'Помогу с доставко', author: 'Муся Щека', price: "100", text: 'Разнообразный и богатый опыт постоянный количественный рост и сфера нашей активности играет важную роль в формировании существующих финансовых и административных условий. Повседневная практика показывает...', id: '1' },
    { title: 'Помогу с доставко', author: 'Муся Щека', price: "100", text: 'Разнообразный и богатый опыт постоянный количественный рост и сфера нашей активности играет важную роль в формировании существующих финансовых и административных условий. Повседневная практика показывает...', id: '2' },
    { title: 'Помогу с доставко', author: 'Муся Щека', price: "100", text: 'Разнообразный и богатый опыт постоянный количественный рост и сфера нашей активности играет важную роль в формировании существующих финансовых и административных условий. Повседневная практика показывает...', id: '3' },
    { title: 'Помогу с доставко', author: 'Муся Щека', price: "100", text: 'Разнообразный и богатый опыт постоянный количественный рост и сфера нашей активности играет важную роль в формировании существующих финансовых и административных условий. Повседневная практика показывает...', id: '4' },
  ];

export const Home = props => {

    const name = useContext(NameContext);

    const changeHandler = text => (e) => console.log(text);

    return (
        <Page>
            <Form onChange={(e) => console.log(e.target)}>
                <HomeInput type="text" placeholder="Поиск..." />
                <RadioWrap>
                    <Radio onChange={changeHandler('1')}>
                        Хочу помочь
                    </Radio>
                    <Radio onChange={changeHandler('2')}>
                        Нужна помощь
                    </Radio>
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
        </Page>
        
    );
};