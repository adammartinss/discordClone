import React from 'react';

import {Container, Messages, Input, InputWrapper, InputIcon } from './styles'


const ChannelData: React.FC = () => {
    return(
        <Container>
            <Messages />
            <InputWrapper>
            <Input type='text' placeholder='Conversar em #chat-livre'/>
            <InputIcon />
            </InputWrapper>
        </Container>
        )
}
export default ChannelData
