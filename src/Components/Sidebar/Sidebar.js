import React, { useState, useEffect} from 'react';
import SidebarOption from './SidebarOption';
import "./Sidebar.css";
import { db } from '../../firebase';
import SidebarHeader from './SidebarHeader';
import { useStateValue } from '../Provider/StateProvider';
import SidebarOptionArea from './SidebarOptionArea';

function Sidebar() {
  return (
    <div className="sidebar">
      <SidebarHeader />

      <h3>MEMBERS</h3>
      
      <SidebarOptionArea />
    </div>
  )
}

export default Sidebar;
