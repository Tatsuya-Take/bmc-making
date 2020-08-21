import React from 'react';
import './App.css';
import Sidebar from './Sidebar';
import Field from './Field';
import Widgets from './Widgets';

function App() {
  return (
    <div className="app">
      {/* Sidebar */}
      <Sidebar />

      {/* Field */}
      <Field />

      {/* Widgets */}
      <Widgets />
    </div>
  );
}

export default App;
