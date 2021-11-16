import React from 'react';
import '../../styles/components/Chat.css';

import ChatMessage from './ChatMessage';
import ChatFooter from './ChatFooter';

import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import SearchIcon from '@mui/icons-material/Search';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const Chat = () => {
  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar/>
        <div className="chat__headerInfo">
          <h3>Room Name</h3>
          <p>Last Seen....</p>
        </div>
        <div className="chat__headerRight">
          <IconButton>
            <SearchIcon/>
          </IconButton>
          <IconButton>
            <AttachFileIcon/>
          </IconButton>
          <IconButton>
            <MoreVertIcon/>
          </IconButton>
        </div>
      </div>
      <div className="chat__body">
        {Array(20)
          .fill(0)
          .map((_, index)=>
            <ChatMessage isReceived={!!Math.round(Math.random())}/>
          )
        }
      </div>
      <ChatFooter/>
    </div>
  )
}

export default Chat;