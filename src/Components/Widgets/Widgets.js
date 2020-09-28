import React,{ useState, useEffect } from 'react';
import WidgetsItem from './WidgetsItem';
import "./Widgets.css";
import { db } from '../../firebase';
import { useStateValue } from '../Provider/StateProvider';

function Widgets() {
  const [widgetsItems, setWidgetsItems] = useState([]);
  const [{ user }] = useStateValue();
  
  useEffect(() => {
    if(user) {
      db.collection('user').doc(user.email)
        .collection('canvas')
        .orderBy('timestamp', 'asc')
        .onSnapshot(snapshot => (
        setWidgetsItems(snapshot.docs.map(doc => ({id: doc.id, title: doc.data().title})))
      ))
    }
  }, [user]);

  const title = 'test_title__title__test_______________';

  return (
    <div className="widgets">
      <div className="widgets__title">
        <h2>Your Canvas</h2>
      </div>
      <div className="widgets__canvasList">
      <WidgetsItem id='test_id' title={title} />
      <WidgetsItem id='test_id' title='test_title__title__test' />
        {/*{widgetsItems.map(item => (
          
        ))}*/}
      </div>
    </div>
  )
};

export default Widgets;
