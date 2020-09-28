import React from 'react';
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from 'react-router-dom';
import './SidebarHeader.css';

function SidebarHeader({ user }) {
  return (
    <div className="sidebarHeader">
      <MenuIcon className="sidebarHeader__menuIcon" />

      <div className="sidebarHeader__title">
        <Link to="/login">Business Model Canvas Making</Link>
      </div>
      <div className="sidebarHeader__user">
        <h3>{user ? user : 'Guest'}</h3>
      </div>
    </div>
  )
}

export default SidebarHeader;
