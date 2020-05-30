import React from 'react';
import styled from 'styled-components';

const Wrap = styled.div`
    max-width: 980px;
    margin-left: auto;
    margin-right: auto;
`;

export const Container = props => {

    return (
        <Wrap>
            {props.children}
        </Wrap>
    );
};
