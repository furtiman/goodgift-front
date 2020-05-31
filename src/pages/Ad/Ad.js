import React from 'react';
import { Page } from 'components/Page';

export const Ad = props => {
    const {match} = props;

    return (
        <Page>
            Ad: {match.params.id}
        </Page>
    );
};
