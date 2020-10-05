import React,{ useState, useEffect } from 'react';
import WidgetsItem from './WidgetsItem';
import "./Widgets.css";
import { db } from '../../firebase';
import { useStateValue } from '../Provider/StateProvider';

function Widgets() {
  const [widgetsItems, setWidgetsItems] = useState([]);
  const [{ userHash }] = useStateValue();
  
  useEffect(() => {
    if(userHash) {
      db.collection('user').doc(userHash)
        .collection('canvas')
        .orderBy('timestamp', 'asc')
        .onSnapshot(snapshot => (
        setWidgetsItems(snapshot.docs.map(doc => ({id: doc.id, title: doc.data().title})))
      ))
    }
  }, [userHash]);

  return (
    <div className="widgets">
      <div className="widgets__title">
        <h2>Your Canvas</h2>
      </div>
      <div className="widgets__canvasList">
        {widgetsItems.map(item => (
          <WidgetsItem id='test_id' title={item.title} id={item.id} />
        ))}
      </div>
    </div>
  )
};

export default Widgets;
