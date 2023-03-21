import React from 'react'
import {useMultiChatLogic,
MultiChatSocket,
MultiChatWindow,} from "react-chat-engine-advanced";
import CusotmHeader from '../customHeader';
import StandardMessageForm from '../standardMessageForm';

const Chat = () => {
    const chatProps = useMultiChatLogic(
        import.meta.env.VITE_PROJECT_ID,
        "testuser",
        "1234"
    )
  return (
    <div style={{flexBasis: "100%"}}>
        <MultiChatSocket {...chatProps}/>
        <MultiChatWindow 
        {...chatProps}
        style={{ height: "100vh" }}
        renderChatHeader={(chat) => <CusotmHeader chat={chat} />}
        renderMessageForm={(props) => {
            return (
                <StandardMessageForm props={props} activeChat={chatProps.chat} />
            )
        }}
        />
        </div>
  )
}

export default Chat