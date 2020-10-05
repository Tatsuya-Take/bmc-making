import React from 'react';
import { Link } from 'react-router-dom';
import './SidebarHeader.css';
import { useStateValue } from '../Provider/StateProvider';

function SidebarHeader() {
  const [{user}] = useStateValue();

  return (
    <div className="sidebarHeader">
        <div className="sidebarHeader__title">
          <h3>Business Model</h3>
          <h3>Canvas Making</h3>
        </div>

      <Link to={!user && '/login'}>
        <div className={`${user && "sidebarHeader__user"} ${!user && "sidebarHeader__signedOutUser"}`}>
          <h3>{!user ? 'Guest' : user.displayName}</h3>
        </div>
      </Link>

    </div>
  )
}

export default SidebarHeader;
