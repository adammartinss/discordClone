import React from 'react';

import {Container} from './styles'

export interface Props { 
    author: string;
    date: string;
    content: string | React.ReactElement | React.ReactNode;
    hasMention?: boolean;
    isBot ?: boolean;
}

const ChannelMessage: React.FC<Props> = ({author, date, content, hasMention, isBot}) => {
    return(
        <Container>
            <Avatar/>
             <Message>
                <Header>
                    <strong>Adam Martins</strong>

                    {isBot && <span>Bot<span/>}

                    <time>24/02/2022</time> 
                </Header>
                <Content>Meu aniversário</Content>
             </Message>
        </Container>
        )
}
export default ChannelMessage;
