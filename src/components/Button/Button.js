import styled, { css } from 'styled-components';

const Container = styled.button`
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

export const Button = Container;