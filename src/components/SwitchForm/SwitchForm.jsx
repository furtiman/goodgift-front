import React, { useState } from 'react';
import styled from 'styled-components';

import { Radio } from "components/Radio";

const RadioWrap = styled.form`
    width: 100%;

    display: flex;
    justify-content: space-between;    

    margin-bottom: 15px;
`

export const SwitchForm = props => {
    
    const {changeFunc, type} = props;

    return (
        <RadioWrap>
            <Radio onChange={changeFunc("1")} checked={type === "1"} >
                Хочу помочь
            </Radio>
            <Radio onChange={changeFunc("2")} checked={type === "2"}  >
                Нужна помощь
            </Radio>
        </RadioWrap>
    );
}