import React from 'react';

import { Container, Messages, Avatar, Header, Content } from './styles';
export { Mention } from './styles'

export interface Props {
    author: string;
    date: string;
    content: string | React.ReactElement | React.ReactNode;
    hasMention?: boolean;
    isBot?: boolean;
}

const ChannelMessage = ({
    author,
    date,
    content,
    hasMention,
    isBot,
}: Props) => {
    return (
        <Container className ={hasMention ?'mention' : ''}>
            <Avatar className={isBot ? 'bot' : ''} />
            <Messages>
                <Header>
                    <strong>{author}</strong>

                    {isBot && <span>Bot</span>}

                    <time>{date}</time>
                </Header>
                <Content>{content}</Content>
            </Messages>
        </Container>
    );
};
export default ChannelMessage;
