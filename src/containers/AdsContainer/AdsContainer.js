import React, { useState, useMemo, useEffect } from 'react';
import { SwitchForm } from 'containers/SwitchForm';
import { Note } from "components/Note";
import { Loader } from 'components/Loader';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';


const Notes = [
    { 
        title: 'Помогу с доставкой 1', 
        author: 'Муся Щека',
        price: "100",
        type: "1",
        id: '1',
        text: 'Разнообразный и богатый опыт постоянный количественный рост и сфера нашей активности играет важную роль в формировании существующих финансовых и административных условий. Повседневная практика показывает...'
    },
    { 
        title: 'Мне нужна помощь с доставкой! 2', 
        author: 'Муся Щека',
        price: "100",
        type: "2",
        id: '2',
        text: 'Разнообразный и богатый опыт постоянный количественный рост и сфера нашей активности играет важную роль в формировании существующих финансовых и административных условий. Повседневная практика показывает...'
    },
    { 
        title: 'Помогу с доставкой 3', 
        author: 'Муся Щека',
        price: "100",
        type: "1",
        id: '3',
        text: 'Разнообразный и богатый опыт постоянный количественный рост и сфера нашей активности играет важную роль в формировании существующих финансовых и административных условий. Повседневная практика показывает...'
    }, 
    { 
        title: 'Мне нужна помощь с доставкой! 4', 
        author: 'Муся Щека',
        price: "100",
        type: "2",
        id: '4',
        text: 'Разнообразный и богатый опыт постоянный количественный рост и сфера нашей активности играет важную роль в формировании существующих финансовых и административных условий. Повседневная практика показывает...'
    },
];

const User = styled.h3`
    margin: 0;
    padding: 0;

    text-align: center;
    padding-bottom: 20px;

    color: var(--black);
    font-size: 32px;
`;

export const AdsContainer = props => {
    const [notes, setNotes] = useState([]);
    const [type, setType] = useState("1");

    const params = useParams();

    const changeHandler = text => e => {
        setType(text);
    }

    useEffect( () => {
        // TODO work with server
        setNotes(Notes);
    }, [] )

    const filtered = useMemo( () => notes.filter(item => item.type === type), [type, notes] );

    return (
        <>
            <User>
                Объявления пользователя {params.user}
            </User>

            <SwitchForm changeFunc={changeHandler} type={type} flex />

            {
                notes.length > 0
                    ? filtered.length > 0
                        ? filtered.map((note) => {  
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
                    : <Loader />
            }
        </>
    );
};
