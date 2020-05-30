import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.h1`
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 0;
    margin: 0;

    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    line-height: 44px;

    color: var(--white);
`;

const SLink = styled(Link)`
    text-decoration: none;
    color: inherit;

    transition: opacity .5s;

    &:hover {
        opacity: .7;
    }
`;

const Part = styled.div`
    display: inline-block;

    &::first-letter {
        color: var(--black)
    }
`;

export const Brand = props => {

    return (
        <Container>
            <SLink to="/" >
                <Part>Good</Part>
                <Part>Gift</Part>
            </SLink>
        </Container>
    );
};
