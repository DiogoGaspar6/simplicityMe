import React, { useEffect, useState } from 'react';
import Overview from './Overview';
import Login from './Login';
import '../styles/App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  useEffect(() => {
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
      setIsLoggedIn(true);
      setUsername(storedUsername);
    }
  }, []);

  const handleLogin = (username) => {
    setIsLoggedIn(true)
    setUsername(username)
  }

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername('');
    localStorage.removeItem('username');
  };

  return (
    <div className="App">
      {isLoggedIn ? (
        <Overview username={username} onLogout={handleLogout}/>
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;