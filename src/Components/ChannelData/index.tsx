import React, { useRef, useEffect } from 'react';

import ChannelMessage, { Mention } from '../ChannelMessage';

import {Container, Messages, Input, InputWrapper, InputIcon } from './styles'

const ChannelData = () => {
    const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>

    useEffect(()=>{
        const div = messagesRef.current;
        if(div){
            div.scrollTop = div.scrollHeight
        }
    })

    return(
        <Container>
            <Messages>
                {Array.from(Array(15).keys()).map((n) => (


                <ChannelMessage
                    key={n}
                    author='Adam Martins'
                    date= '26/05/2020'
                    content ='todos lixos'
                />
                ))}
                <ChannelMessage
                    author='Arthur'
                    date= '26/05/2020'
                    content ={
                        <>
                        <Mention>@Adam Martins</Mention>, me carrega no LoLzin
                        </>
                    }
                    hasMention
                    isBot
                />
            </Messages>
            <InputWrapper>
            <Input type='text' placeholder='Conversar em #chat-livre'/>
            <InputIcon />
            </InputWrapper>
        </Container>
        )
}
export default ChannelData
