import React, { createContext } from 'react';
import styled from 'styled-components';
import { useId } from 'hooks/useId';

const Container = styled.form`
    
`;

const NameContext = createContext("");

export const Form = props => {

    const {children, submitHandler} = props;
    const name = useId("form");

    const onSubmit = e => {
        e.preventDefault();

        if( submitHandler ) submitHandler();
    }

    return (
        <Container onSubmit={onSubmit} name={name} >
            <NameContext.Provider value={name} >
                {children}
            </NameContext.Provider>
        </Container>
    );
};
