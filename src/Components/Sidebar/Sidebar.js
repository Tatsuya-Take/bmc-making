import React, { useState, useEffect} from 'react';
import SidebarOption from './SidebarOption';
import "./Sidebar.css";
import { db } from '../../firebase';
import SidebarHeader from './SidebarHeader';
import { useParams } from 'react-router-dom';
import { useStateValue } from '../Provider/StateProvider';

function Sidebar() {
  const [{user}] = useStateValue();
  const [members, setMembers] = useState([]);
  const { displayName, canvasId } = useParams();

  useEffect(() => {
    if(user && canvasId) {
      db.collection('user').doc(user?.email)
      .collection('canvas').onSnapshot(snapshot => (
        setMembers(snapshot.docs.map(doc => ({
          name: doc.data().name,
          email: doc.data().email
        })))
      ))
    }
  }, [user, canvasId])

  return (
    <div className="sidebar">
      <SidebarHeader user={displayName} />

      <h3>MEMBER</h3>
      {members.map(member => (
        <SidebarOption
          name={member.name}
          email={member.email}
        />
      ))}
    </div>
  )
}

export default Sidebar;
