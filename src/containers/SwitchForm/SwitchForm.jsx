import React from 'react';
import styled from 'styled-components';

import { Radio } from "components/Radio";
import { Form } from 'components/Form';

const Wrap = styled.div`
    width: 100%;

    display: flex;
    justify-content: space-between;    

    margin-bottom: 15px;
`;

export const SwitchForm = props => {
    
    const {changeFunc, type, variant, flex} = props;

    const buttons = (
        <>
            <Radio onChange={changeFunc("1")} checked={type === "1"} >
                Хочу помочь
            </Radio>
            <Radio onChange={changeFunc("2")} checked={type === "2"}  >
                Нужна помощь
            </Radio>
        </>
        );

    return variant === "home"
        ? (<Wrap>
            {buttons}
        </Wrap>)
        : (<Form flex={flex} >
            {buttons}
        </Form>);
}