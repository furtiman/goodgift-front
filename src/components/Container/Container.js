import React from 'react';
import styled from 'styled-components';

const Wrap = styled.div`
    max-width: 980px;

    margin-left: auto;
    margin-right: auto;

    padding-left: 5px;
    padding-right: 5px;
`;

export const Container = props => {

    return (
        <Wrap>
            {props.children}
        </Wrap>
    );
};
