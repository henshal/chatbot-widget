import { useState } from 'react';
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import { theme } from './theme';
import './App.css';

export default function App() {
  const [isChatOpen, setChatOpen] = useState(false);

  const handleChatButtonClick = () => {
    setChatOpen(!isChatOpen);
  };

  return (
    <MantineProvider theme={theme}>
      <div className="app">
        <button className="chat-button" onClick={handleChatButtonClick}>
          💬
        </button>
        <div className={`chat-widget ${isChatOpen ? 'open' : ''}`}>
          <div className="chat-header">Chat with us</div>
          <div className="chat-body">
            {/* Chat content goes here */}
          </div>
          <div className="chat-input">
            <input type="text" placeholder="Type a message..." />
          </div>
        </div>
      </div>
    </MantineProvider>
  );
}
