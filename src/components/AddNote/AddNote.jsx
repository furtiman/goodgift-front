import React from "react";
import styled from "styled-components";
import { Balance } from "components/Balance";
import { Link } from "react-router-dom";

const Wrap = styled(Link)`
    max-width: 980px;
    width: 100%;
    height: 70px;

    position: fixed;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);

    display: flex;
    align-items: center;
    justify-content: center;    

    background: var(--green);
    transition: .3s;
    
    &:hover{
        background: var(--black);
    }

    &::before,
    &::after{
        content: '';
        width: 40px;
        height: 5px;

        position: absolute;

        background: var(--white);
    }
    &::after{
        transform: rotate(90deg);
    }
`;


export const AddNote = (props) => {

    const {title, author, price, text} = props;

    return (
        <Wrap to="/create"></Wrap>
    );
};