import React from 'react';
import '../../styles/components/Sidebar.css';

import SidebarChat from './SidebarChat';

import IconButton from '@mui/material/IconButton';
import ChatIcon from '@mui/icons-material/Chat';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Avatar from '@mui/material/Avatar';
import SearchIcon from '@mui/icons-material/Search';

const Sidebar = () => {

  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <Avatar src="https://github.com/allenabraham777.png"/>
        <div className="sidebar__headerRight">
          <IconButton>
            <DonutLargeIcon/>
          </IconButton>
          <IconButton>
            <ChatIcon/>
          </IconButton>
          <IconButton>
            <MoreVertIcon/>
          </IconButton>
        </div>
      </div>
      <div className="sidebar__search">
        <div className="sidebar__searchContainer">
          <SearchIcon/>
          <input placeholder="Search or start new chat" type="text"/>
        </div>
      </div>
      <div className="sidebar__chats">
        {Array(10).fill(0).map(_=>(<SidebarChat/>))}
      </div>
    </div>
  )
}

export default Sidebar;