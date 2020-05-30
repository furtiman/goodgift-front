import React from 'react';
import styled, { css } from 'styled-components';

const Second = styled.button`
    margin-top: 15px;
    padding: 15px 20px;

    ${ props => props.variant === "popup" 
        ? css`
            font-size: 24px;
            font-weight: normal;
            line-height: 29px;
         `
        : css`
            font-style: normal;
            font-weight: bold;
            font-size: 36px;
            line-height: 44px;
            padding: 13px 120px;
        ` 
    }

    ${ props => props.varian === "" }

    color: var(--white);
    background: var(--black);

    border: none;
    outline: none;
    cursor: pointer;

    text-align: center;
    border: none;
    outline: none;

    transition: .2s;

    &:hover {
        background: var(--green);
    }
`;

const First = styled.button`
    padding: 25px 7px 26px 8px;

    ${ props => props.margin && css`
        margin-left: 6px;
    ` }

    border: none;
    outline: none;
    cursor: pointer;

    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 29px;

    background-color: transparent;

    &:hover {
        background-color: var(--black);
        color: var(--white);
    }

    transition: all .2s;
`;

export const Button = props => {

    const {variant, buttonProps, type, children} = props;

    return (
        <>
            {
                type === "first" 
                    ? <First variant={variant} {...buttonProps} children={children} />
                    : <Second variant={variant} {...buttonProps} children={children} />
            }
        </>
    );
};
