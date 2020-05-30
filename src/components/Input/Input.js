import styled from 'styled-components';

const Container = styled.input`
    font-size: 24px;
    font-weight: bold;
    line-height: 29px;

    padding: 15px 20px;
    margin-bottom: 15px;

    color: var(--gray);
    background-color: var(--light-gray);

    border: none;
    outline: none;

    &::placeholder{
        color: var(--gray);
    }
`;

export const Input = Container;