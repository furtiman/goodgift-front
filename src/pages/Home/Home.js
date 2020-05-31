import React, { useState } from 'react';
import styled from 'styled-components';

import { Page } from 'components/Page';
import { Note } from 'components/Note/';
import { Input } from 'components/Input';
import { Form } from 'components/Form';
import { AddNote } from 'components/AddNote';
import { Radio } from "components/Radio";

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
    const [type, setType] = useState("0");
    const radioChanger = text => e => setType(text);

    const [error, setError] = useState(null);

    const [value, setValue] = useState("");
    const changeHandler = e => {
        setValue(e.target.value);
        setError(null);
    };

    const [notes, setNotes] = useState(Notes);

    const sendHandler = e => {
        // bug
        if( value === "" ) return;
        
        // TODO request to server
        if( value === "test" ) return setNotes(Notes);
        console.log(type);
        setNotes([]);
    }

    return (
        <Page>
            <Form onSubmit={sendHandler} >
                <HomeInput 
                    type="search" 
                    minLength="3"
                    placeholder="Поиск..."
                    value={value}
                    onChange={changeHandler}
                />
                
                {
                    error && <div>{error}</div>
                }

                <RadioWrap>
                    <Radio onChange={radioChanger("1")} >
                        Хочу помочь
                    </Radio>
                    <Radio onChange={radioChanger("2")} >
                        Нужна помощь
                    </Radio>
                </RadioWrap>
            </Form>
            {
                notes.length > 0
                    ? notes.map((note) => {  
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
                        })
                    : <div>Nothing found</div>
            }
            <AddNote />
        </Page>
        
    );
};