import React, { useState } from 'react';
import LoginForm from './Login';
import UserList from './UserList';

const App = () => {
  const [names, setMessages] = useState([]);
  const handleSend = name => {
    setMessages([name, ...names]);
  };
  return (
    <div>
       <LoginForm onSend={handleSend} />
       <UserList data={names} />
    </div>
  );
};

export default App;