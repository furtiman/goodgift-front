import React from 'react';
import styled from 'styled-components';

const Wrap = styled.div`
    position: absolute;

    top: 0;
    left: 0;

    transform: ${props => props.show 
        ? "translateX(0)" 
        : "translateX(-100%)"
    };

    transition: transform .7s;
`;

export const Notification = props => {

    const {children, show} = props;

    return (
        <Wrap show={show} >
            {children}
        </Wrap>
    );
};
