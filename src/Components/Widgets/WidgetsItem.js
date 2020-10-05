import React from 'react';
import "./WidgetsItem.css";
import { useHistory } from 'react-router-dom';
import { useStateValue } from '../Provider/StateProvider';


function SearchResults({title, id}) {
  const history = useHistory();
  const [{user}, dispatch] = useStateValue();

  const changeCanvas = () => {
    if (user?.uid) { 
      dispatch({
        type: 'SET_CANVAS',
        canvasId: id
      })
      
      history.push(`/canvas/${user.displayName}/${id}`);
    }
  }

  return (
    <div onClick={changeCanvas} className="widgetsItem">
      <span className="widgetsItem__title">{title ? title : 'Untitled'}</span>
      <span className="widgetsItem__id">{id}</span>
    </div>
  )
}

export default SearchResults;
