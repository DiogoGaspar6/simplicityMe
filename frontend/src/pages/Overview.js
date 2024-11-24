import { useState } from 'react';
import Header from '../components/Header';
import Nav from '../components/Nav';
import '../styles/Overview.css';

function Overview( {username, onLogout} ) {
  const [activeScreen, setActiveScreen] = useState('Overview');
  return (
    <div className='Overview'>
      <Nav onLogout={onLogout} activeScreen={activeScreen} setActiveScreen={setActiveScreen}/>
      <div className="Overview-content">
        <Header title="Overview" userName={username}/>
      </div>
    </div>
  );
}

export default Overview;
