import React, { createContext } from 'react';
import styled, { css } from 'styled-components';
import { useId } from 'hooks/useId';

const Container = styled.form`
    ${ props => props.flex && css`
        width: 100%;

        display: flex;
        justify-content: space-between;    

        margin-bottom: 15px;
    ` }
`;

export const NameContext = createContext("");

export const Form = props => {

    const {children, onSubmit, flex} = props;
    const name = useId("form");

    const submitHandler = e => {
        e.preventDefault();

        if( onSubmit ) onSubmit(e);
    }

    return (
        <Container flex={flex} onSubmit={submitHandler} name={name} >
            <NameContext.Provider value={name} >
                {children}
            </NameContext.Provider>
        </Container>
    );
};
