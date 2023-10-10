// src/App.js
import React, { useState } from 'react';
import './App.css';
import HeadBar from './components/HeadBar';
import MainContent from './components/MainContent';

function App() {
  const tabs = ['Create VTP', 'From Docx to .tcl', 'Spec System', 'SRS', 'BDS'];
  const [currentTab, setCurrentTab] = useState('Create VTP');

  const handleTabChange = (tab) => {
    setCurrentTab(tab);
  };

  return (
    <div className="app">
      <HeadBar tabs={tabs} currentTab={currentTab} onTabChange={handleTabChange} />
      <MainContent currentTab={currentTab} />
    </div>                                                                                                                                                                                   
  );
}

export default App;
