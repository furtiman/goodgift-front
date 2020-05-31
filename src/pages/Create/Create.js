import React from 'react';
import styled from 'styled-components';

import { Page } from 'components/Page';
import { Form } from 'components/Form';
import { Input } from 'components/Input';

const CreateInput = styled(Input)`
    width: 100%;
    margin-bottom: 20px;
`

export const Create = props => {

    return (
        <Page>
            <Form>
                <CreateInput placeholder="Название"/>

            </Form>
        </Page>
    );
};
