import React from 'react';

import { Button } from './styles';

export interface Props {
    selected?: boolean;
    isHome?: boolean;
    hasNotifications?: boolean;
    mentions?: number;
}

const ServerButton = ({
    selected,
    isHome,
    hasNotifications,
    mentions,
}:Props) => {
    return (
        <Button
            isHome={isHome}
            hasNotifications={hasNotifications}
            mentions={mentions}
            className={selected ? 'active' : ''}
        ></Button>
    );
};

export default ServerButton;
