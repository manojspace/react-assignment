import React from 'react';
import LeftNavigation from './components/LeftNavigation';
import MainApp from './components/MainApp';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="sidebar">
        <LeftNavigation />
      </div>
      <div className="content">
        <MainApp />
      </div>
    </div>
  );
}

export default App;
