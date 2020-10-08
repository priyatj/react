import React, { useState } from 'react';

const Login = ({ onSend }) => {
  const [inputText, setInputText] = useState('');
  
    const handleTextChange = event => {
      setInputText(event.target.value);
    };
    const handleSend = () => {
      onSend(inputText);
         setInputText('');
       }

  return (
    <div>
        <input
        type="text"
        data-testid="nameText"
        value={inputText}
        onChange={handleTextChange}
      />
      <button
        data-testid="sendButton"
        onClick={handleSend}
      >
        Send
      </button>
    </div>
  );
};

export default Login;