import React from "react";
import styled from "styled-components";
import { Balance } from "components/Balance";

const Wrap = styled.div`
    width: 100%;
    max-height: 125px;
    height: 100%;

    display: flex;
    flex-direction: column;

    background: var(--light-gray);
    transition: .3s;
    border-bottom: 9px solid var(--green);

    padding: 10px 25px;
    margin-bottom: 6px;
`;
const TopWrap = styled.div`
    width:100%;

    display: flex;
    justify-content: space-between;
    align-items: center;
    
`
// const Flex = styled.div`
//     display: flex; 
// `
const Title = styled.h2`
    font-weight: bold;
    font-size: 18px;
    line-height: 22px;
    color: var(--black);

    margin: 0 30px 0 0;
`;
// const Hashtag = styled.span`
//     font-weight: bold;
//     font-size: 18px;
//     line-height: 22px;

//     color: var(--white);
// `;
const Author = styled.span`
    font-weight: bold;
    font-size: 14px;
    line-height: 17px;
    color: var(--gray);
    margin-bottom: 5px;
`;
const Text = styled.span`
    font-weight: bold;
    font-size: 14px;
    line-height: 17px;
    color: var(--black);
`;

export const Note = (props) => {

    const {title, author, price, text} = props;

    return (
        <Wrap>
            <TopWrap>
                <Title>{title}</Title>
                <Balance value={price}/>
            </TopWrap>
            <Author>{author}</Author>
            <Text>
                {text}
            </Text>
        </Wrap>
    );
};