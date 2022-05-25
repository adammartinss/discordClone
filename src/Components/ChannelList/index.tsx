import React from 'react';

import ChannelButton from '../ChannelButton';
import { Container, Category, AddCategoryIcon } from './styles';

import Servername from '../ServerList';

const ChannelList: React.FC = () => {
    return (
        <Container>
            <Category>
                <span>Canais De Texto</span>
                <AddCategoryIcon />
            </Category>


            <ChannelButton channelName="chat-livre" />
            <ChannelButton channelName='trabalho' />
            <ChannelButton channelName='cs-go' />
            <ChannelButton channelName='vava'/>
            <ChannelButton channelName='lolzinho' />
        </Container>
    );
}
export default ChannelList
