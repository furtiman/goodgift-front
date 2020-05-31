import React from "react";
import styled from "styled-components";

const Wrap = styled.div`
    display: flex;
    flex-direction: column;

    position: fixed;
    left: 50%;
    z-index: 10;
    ${props => props.show 
        ? `top: 50%;
           transform: translate(-50%, -50%);`
        : `top: 0;
           transform: translate(-50%, -100%);`
    }

  background: #efedef;
  transition: .3s;

  padding: 25px;
`;
const BackDrop = styled.div`
    width: 100%;
    height: 100%;

    position: absolute;
    top: 0;
    left: 0;
    z-index: 9;

    ${props => props.show 
        ? `transform: translate(0, 0);`
        : `transform: translate(0, -100%);`
    }

    background: rgba(34, 32, 34, 0.5);
    transition: .3s;
`;

export const PopUp = (props) => {

    const {show, children, backDropHandler} = props;

    return (
        <>
            <BackDrop show={show} onClick={() => backDropHandler()}/>
            <Wrap show={show}>
                {children}
            </Wrap>
        </>
    );
};
