import React from 'react';
import styled from 'styled-components';

const arrayT = ["test1", "test2", "test3", "test4"];
var selectedT = true;
export const SortPanel = props => {
    return (
        <Wrapper>
            {arrayT.map(item => (
                <SortPanelElem selected>
                    <Title>{item}</Title>
                </SortPanelElem>
            ))}
        </Wrapper>
    );
};

// Create a Title component that'll render an <h1> tag with some styles
const Title = styled.h1`
  text-align: center;
  color:var(--white)
`;

const SortPanelElem = styled.section`
    cursor: pointer;
    background-color: ${props => props.selected ? "var(--green)" : "var(--black)"};
    min-height: 40px;
    &:hover {
        color: var(--black);
    }
`;

const LocationSearch = styled(SortPanelElem)``;

const CategorySearch = styled(SortPanelElem)``;

// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`
  margin: 1em;
  padding: 0.5em;
  display: flex-box;
  min-width: 10em;
  max-width: 12em;
  min-height: 40em;
  max-height: 50em;
  background-color: var(--light-gray);
`;