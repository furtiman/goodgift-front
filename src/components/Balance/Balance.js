import React from 'react';
import styled from 'styled-components';

const Wrap = styled.div`
    display: flex;

    padding: 7px;

    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 22px;

    color: var(--white);

    background-color: var(--black);
`;

const Symbol = styled.div`
    position: relative;
    
    margin-left: 9px;

    &::after {
        content: "";

        position: absolute;
        top: 50%;
        left: 50%;

        transform: translate(-50%, -50%);

        display: block;

        width: 3px;
        height: 18px;
        
        background-color: var(--white);
    }
`;

export const Balance = props => {

    return (
        <Wrap>
            {props.value}
            <Symbol>G</Symbol>
        </Wrap>
    );
};
