import Header from '../components/Header';
import Nav from '../components/Nav';
import { Button } from '@mui/material';
import '../styles/Overview.css';

function Overview( {username, onLogout} ) {
  return (
    <div className='Overview'>
      <Nav onLogout={onLogout}/>
      <div className="Overview-content">
        <Header title="Overview" userName={username}/>
      </div>
    </div>
  );
}

export default Overview;
