import React from 'react';
import '../../styles/components/SidebarChat.css';

import Avatar from '@mui/material/Avatar';

const SidebarChat = () => {
  return (
    <div className="sidebarChat">
     <Avatar/>
     <div className="sidebarChat__info">
      <h2>Room Name</h2>
      <p>Last Message.......</p>
     </div>
    </div>
  )
}

export default SidebarChat;