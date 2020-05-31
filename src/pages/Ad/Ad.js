import React from 'react';
import { Page } from 'components/Page';
import styled from 'styled-components';
import { Button } from 'components/Button';

const testNote = { 
    title: 'Помогу с доставкой 1', 
    author: 'Муся Щека',
    price: "100",
    type: "1",
    id: '1',
    text: 'Современные технологии достигли такого уровня, \n что внедрение современных методик однозначно определяет каждого участника как способного принимать собственные решения касаемо позиций, занимаемых участниками в отношении поставленных задач. В частности, сложившаяся структура организации предполагает независимые способы реализации форм воздействия! Кстати, действия представителей оппозиции освещают чрезвычайно интересные особенности картины в целом, однако конкретные выводы, разумеется, объявлены нарушающими общечеловеческие нормы этики и морали. Являясь всего лишь частью общей картины, базовые сценарии поведения пользователей ограничены исключительно образом мышления. Следует отметить, что синтетическое тестирование обеспечивает широкому кругу (специалистов) участие в формировании поставленных обществом задач. \n Вот вам яркий пример современных тенденций - разбавленное изрядной долей эмпатии, рациональное мышление, в своём классическом представлении, допускает внедрение форм воздействия! Есть над чем задуматься: независимые государства, которые представляют собой яркий пример континентально-европейского типа политической культуры, будут рассмотрены исключительно в разрезе маркетинговых и финансовых предпосылок. С другой стороны, синтетическое тестирование обеспечивает актуальность анализа существующих паттернов поведения. Но действия представителей оппозиции преданы социально-демократической анафеме. Но новая модель организационной деятельности напрямую зависит от кластеризации усилий.'
};

const Title = styled.h3`
    margin: 0;
    padding: 0 0 15px 0;

    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    line-height: 44px;

    color: var(--black);
`;

const Author = styled.h4`
    margin: 0;
    padding: 0 0 40px 0;

    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 29px;

    color: var(--gray);
`;

const Text = styled.p`
    margin: 0;
    padding: 0 0 55px 0;

    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 22px;

    color: var(--black);
`;

const ButtonWrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const AdButton = styled(Button)`
    padding: 24px 92px;

    color: var(--black);
    background-color: var(--light-gray);

    &: hover {
        color: var(--white);
    }
`;

export const Ad = props => {
    // const {match} = props;
    // const {id} = match.params;

    const {title, author, text} = testNote;
    const clickHandler = e => {
        //TODO work with server

        console.log("request to author...")
    }

    return (
        <Page>
            <Title>{title}</Title>
            <Author>{author}</Author>
            <Text>{text}</Text>
            
            <ButtonWrap>
                <AdButton onClick={clickHandler} >Ответить автору</AdButton>
            </ButtonWrap>
        </Page>
    );
};
