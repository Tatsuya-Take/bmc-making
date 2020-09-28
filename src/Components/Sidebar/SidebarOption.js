import React, { useState, useEffect } from 'react';
import "./SidebarOption.css"
import { db } from '../../firebase';

function SidebarOption({ name, email }) {
  const [isOnline, setisOnline] = useState(false);

  useEffect(() => {
    if (email) {
      db.collection('user').doc(email)
      .onSnapshot(snapshot => {
        setisOnline(snapshot.data().isOnline)
      })
    }
  }, [email])

  return (
    <div className="sidebarOption">
      <h2>{name}</h2>
      {isOnline ? (
        <p>⚪️</p>
      ) : null}
    </div>
  )
}

export default SidebarOption
