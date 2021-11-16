import React from 'react';
import './styles/App.css';

import Sidebar from './components/Sidebar';
import Chat from './components/Chat';

const App = () => {
  return (
    <div className="app">
      <div className="app__body">
        {/* Sidebar */}
        <Sidebar/>
        {/* Chat */}
        <Chat/>
      </div>
    </div>
  )
}

export default App;