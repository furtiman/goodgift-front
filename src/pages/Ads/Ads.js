import React from 'react';
import { Page } from 'components/Page';

export const Ads = props => {
    const {match} = props;

    return (
        <Page>
            Ads {match.params.user}
        </Page>
    );
};
