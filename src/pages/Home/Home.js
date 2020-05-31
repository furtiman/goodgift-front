import React from 'react';
import styled from 'styled-components';

import { Page } from 'components/Page';
import { Note } from 'components/Note/';
import { Input } from 'components/Input';
import { Button } from 'components/Button';

const HomeInput = styled(Input)`
    width: 100%;
    box-sizing: border-box;
    margin-bottom: 20px;
`
const RadioWrap = styled.div`
    width: 100%;

    display: flex;
    justify-content: space-between;    

    margin-bottom: 15px;
`
const Radio = styled.input`
    display: none;
`
const RadioButton = styled(Button)`
    margin: 0;
`


export const Home = props => {

    return (
        <Page>
            <HomeInput type="text" placeholder="Поиск..." />
                <RadioWrap>
                    <Radio type="radio" name="help" value="want"/>
                    <RadioButton htmlFor="want">Хочу помочь</RadioButton>
                    <Radio type="radio" name="help" value="need"/>
                    <RadioButton htmlFor="need">Нужна помощь</RadioButton>
                </RadioWrap>
            <Note
                title="Помогу с доставко"
                author="Муся Щека"
                price="100"
                text="Разнообразный и богатый опыт постоянный количественный рост и сфера нашей активности играет важную роль в формировании существующих финансовых и административных условий. Повседневная практика показывает..."
                />
            <Note
                title="Помогу с доставко"
                author="Муся Щека"
                price="100"
                text="Разнообразный и богатый опыт постоянный количественный рост и сфера нашей активности играет важную роль в формировании существующих финансовых и административных условий. Повседневная практика показывает..."
                />
            <Note
                title="Помогу с доставко"
                author="Муся Щека"
                price="100"
                text="Разнообразный и богатый опыт постоянный количественный рост и сфера нашей активности играет важную роль в формировании существующих финансовых и административных условий. Повседневная практика показывает..."
                />
        </Page>
    );
};