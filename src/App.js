import React from 'react';
import Sidebar from './Sidebar';
import Canvas from './Canvas';
import Widgets from './Widgets';
import './App.css';

function App() {
  return (
    <div className="app">
      {/* Sidebar */}
      <Sidebar />

      {/* Field */}
      <Canvas />

      {/* Widgets */}
      <Widgets />
    </div>
  );
}

export default App;
