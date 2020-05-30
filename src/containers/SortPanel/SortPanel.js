import React from 'react';
import styled from 'styled-components';

const categories = ["test1", "test2", "test3", "test4"];

const Title = styled.h3`
    padding: 0;
    margin: 0;

    text-align: center;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 22px;
`;

const Wrap = styled.div`
    min-height: 40px;

    margin: 0 10px 10px 10px;
    padding: 8px 10px;

    background-color: ${props => props.selected ? "var(--green)" : "var(--black)"};

    cursor: pointer;

    color: var(--white);

    &:hover {
        color: var(--black);
    }
`;

// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.div`
  padding-top: 10px;

  width: 200px;

  min-height: 100vh;

  background-color: var(--light-gray);
`;

export const SortPanel = props => {
    return (
        <Wrapper>
            {categories.map(category => (
                <Wrap key={category} selected>
                    <Title>{category}</Title>
                </Wrap>
            ))}
        </Wrapper>
    );
};