import React from 'react';
import SearchResults from './SearchResults';
import SearchIcon from '@material-ui/icons/Search';
import "./Widgets.css";

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon />
        <input placeholder="input text" />
      </div>

      {/* search results */}
      <div className="widgets__results">
        <SearchResults />
        <SearchResults />
        <SearchResults />
        <SearchResults />
        <SearchResults />
        <SearchResults />
        <SearchResults />
        <SearchResults />
        <SearchResults />
        <SearchResults />
        <SearchResults />
      </div>

      {/* Latest bmc */}
    </div>
  )
};

export default Widgets;
