import React, { useState, useEffect } from 'react';
import "./SidebarOption.css"
import { db } from '../../firebase';

function SidebarOption({ name, id }) {
  const [isOnline, setisOnline] = useState(false);

  useEffect(() => {
    if (id) {
      db.collection('user').doc(id)
      .onSnapshot(snapshot => {
        setisOnline(snapshot.data().isOnline)
      })
    }
  }, [id])

  return (
    <div className="sidebarOption">
      <h2>{name}</h2>
      {isOnline ? (
        <p>●</p>
      ) : <p>○</p>}
    </div>
  )
}

export default SidebarOption
