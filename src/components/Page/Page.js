import React from 'react';
import styled from 'styled-components';
import { Container } from 'components/Container';

const Background = styled.div`
    min-height: calc(100vh - 80px);
    
    position: relative;

    background-color: var(--white);

    padding-top: 50px;

    padding-bottom: 80px;
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
