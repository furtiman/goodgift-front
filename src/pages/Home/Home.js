import React from 'react';
import styled from 'styled-components';

import { Page } from 'components/Page';
import { Note } from 'components/Note/';
import { Input } from 'components/Input';
import { Button } from 'components/Button';

const HomeInput = styled(Input)`
    width: 100%;
    box-sizing: border-box;
`
const RadioWrap = styled.div`
    width: 100%;
    margin: 0;

    display: flex;
    justify-content: space-between;    
`

export const Home = props => {

    return (
        <Page>
            <HomeInput type="text" placeholder="Поиск..." />
                <RadioWrap>
                    <Button>Хочу помочь</Button>
                    <Button>Нужна помощь</Button>
                </RadioWrap>
            <Note />
        </Page>
    );
};