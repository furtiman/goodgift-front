import React, { useContext } from 'react';
import styled from 'styled-components';
import { useId } from 'hooks/useId';

const RadioInput = styled.input`
    position: absolute;
    z-index: -1;

    &:checked + label{
        background: var(--green);
    }
`
const RadioButton = styled.label`
    display: block;

    color: var(--white);
    background: var(--black);
    border: none;
    outline: none;
    cursor: pointer;
    text-align: center;
    font-weight: bold;
    font-size: 36px;
    line-height: 44px;
    transition: .2s;

    padding: 13px 105px;

    &:hover {
        background: var(--green);
    }
`

export const Radio = props => {
    const id = useId('radio');

    const {checked, children, onChange} = props;

    return (
        <>
            <Radio 
                type="radio"
                id={id}
                checked={checked}
                onChange={onChange}
                />
            <RadioButton htmlFor={id}>
                {children}
            </RadioButton>
        </>

    )
}