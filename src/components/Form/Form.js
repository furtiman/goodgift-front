import React, { createContext } from 'react';
import styled from 'styled-components';
import { useId } from 'hooks/useId';

const Container = styled.form`
    
`;

export const NameContext = createContext("");

export const Form = props => {

    const {children, onSubmit} = props;
    const name = useId("form");

    const submitHandler = e => {
        e.preventDefault();

        if( onSubmit ) onSubmit(e);
    }

    return (
        <Container onSubmit={submitHandler} name={name} >
            <NameContext.Provider value={name} >
                {children}
            </NameContext.Provider>
        </Container>
    );
};
