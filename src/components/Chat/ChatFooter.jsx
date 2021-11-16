import React from 'react';
import '../../styles/components/ChatFooter.css';

import IconButton from '@mui/material/IconButton';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import MicIcon from '@mui/icons-material/Mic';

const ChatFooter = () => {
  return (
   <div className="chat__footer">
    <InsertEmoticonIcon/>
    <form>
      <input placeholder="Type a message" type="text"/>
      <button type="submit">Send a Message</button>
    </form>
    <MicIcon/>
   </div>
  )
}

export default ChatFooter;