import React, { useEffect, useState } from 'react';
import { useStateValue } from '../Provider/StateProvider';
import SidebarOption from './SidebarOption';
import './SidebarOptionArea.css';
import { db } from '../../firebase';

function SidebarOptionArea() {
  const [{user, userHash, canvasId}] = useStateValue();
  const [members, setMembers] = useState([]);

  useEffect(() => {
    if(userHash && canvasId) {
      db.collection('user').doc(userHash)
      .collection('canvas').onSnapshot(snapshot => (
        setMembers(snapshot.docs.map(doc => ({
          name: doc.data().name,
          id: doc.data().id
        })))
      ))
    }
  }, [userHash, canvasId])

  return (
    <div className="sidebarOptionArea">

      {user ? (
        <SidebarOption name={user.displayName} id={userHash} />
      ) : null}

      {members.map(member => (
        <SidebarOption
          name={member.name}
          id={member.id}
        />
      ))}
    </div>
  )
}

export default SidebarOptionArea;
