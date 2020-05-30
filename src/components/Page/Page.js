import React from 'react';
import styled from 'styled-components';
import { Container } from 'components/Container';

const Background = styled.div`
    background-color: var(--white);

    padding-top: 50px;
`

export const Page = props => {

    const {children} = props;

    return (
        <Background>
            <Container>
                {children}
            </Container>
        </Background>
    );
};
