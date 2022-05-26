import React from 'react';

import ServerButton from '../ServerButton'

import { Container, Separator } from './styles';

const ServerList = () => {
    return (
        <Container>
            <ServerButton isHome />
            <Separator />
            <ServerButton hasNotifications />
            <ServerButton mentions={3} />
            <ServerButton />
            <ServerButton />
            <ServerButton />
            <ServerButton />
            <ServerButton />
            <ServerButton />
            <ServerButton hasNotifications />
            <ServerButton />
            <ServerButton />
            <ServerButton hasNotifications />
            <ServerButton hasNotifications />
            <ServerButton />
            <ServerButton />
            <ServerButton hasNotifications />
            <ServerButton mentions={69} />
            <ServerButton />
            <ServerButton />
        </Container>
    );
}
export default ServerList;
