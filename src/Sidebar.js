import React from 'react';
import SidebarOption from './SidebarOption';
import MenuIcon from '@material-ui/icons/Menu';
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      {/* MenuIcon */}
      <MenuIcon className="sidebar__menuIcon" />

      <SidebarOption active text="BMC" />
      <SidebarOption text="3C analisis" />
      <SidebarOption text="4C analisis" />
      <SidebarOption text="SWOT analisis" />
      <SidebarOption text="Five force analisis" />
    </div>
  )
}

export default Sidebar;
