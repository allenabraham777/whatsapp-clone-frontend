import React from 'react';
import '../../styles/components/ChatMessage.css';

const ChatMessage = ({isReceived}) => {
  return (
    <p className={`chat__message ${isReceived ? 'chat__received' : ''}`}>
      <span className="chat__name">Name</span>
      Message.....
      <span className="chat__timestamp">{new Date().toUTCString()}</span>
    </p>
  )
}

export default ChatMessage;