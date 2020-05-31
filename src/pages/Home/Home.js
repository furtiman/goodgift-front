import React, { useState, useContext, useMemo } from 'react';
import styled from 'styled-components';

import { Page } from 'components/Page';
import { Note } from 'components/Note/';
import { Input } from 'components/Input';
import { Form } from 'components/Form';
import { AddNote } from 'components/AddNote';
import { SwitchForm } from "containers/SwitchForm";
import { StoreContext } from 'store/reducer';

const HomeInput = styled(Input)`
    width: 100%;
    margin-bottom: 20px;
`

export const Home = props => {
    const [error, setError] = useState(null);

    const [value, setValue] = useState("");
    const changeHandler = e => {
        setValue(e.target.value);
        setError(null);
    };

    const { notes: cNotes } = useContext(StoreContext);

    // removed setNotes
    const [notes] = useState(cNotes);

    const sendHandler = e => {
        // // bug
        // if( value === "" ) return;
        
        // // TODO request to server
        // if( value === "test" ) return setNotes(Notes);
        // console.log(type);
        // setNotes([]);
    }

    // radio
    const [type, setType] = useState("1");
    const radioChanger = text => e => {
        setType(text);
    };

    const filtered = useMemo( () => notes.filter(item => item.type === type), [type, notes] );

    const {login} = useContext(StoreContext);

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

                <SwitchForm variant="home" changeFunc={radioChanger} type={type} />
            </Form>
            {
                filtered.length > 0
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
            }
            {
                login && <AddNote />
            }
        </Page>
        
    );
};