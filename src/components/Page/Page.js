import React from 'react';
import styled from 'styled-components';
import { Container } from 'components/Container';

const Wrap = styled.div`
    background-color: var(--white);
`;

export const Page = props => {

    const {children} = props;

    return (
        <Wrap>
            <Container>
                {children}
            </Container>
        </Wrap>
    );
};
