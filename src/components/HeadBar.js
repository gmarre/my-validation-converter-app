// src/components/HeadBar.js
import React from 'react';

const HeadBar = ({ tabs, currentTab, onTabChange }) => {
  const handleTabClick = (tab) => {
    onTabChange(tab);
  };

  return (
    <div className="head-bar">
      {tabs.map((tab) => (
        <div
          key={tab}
          className={`tab ${currentTab === tab ? 'active' : ''}`}
          onClick={() => handleTabClick(tab)}
        >
          {tab}
        </div>
      ))}
    </div>
  );
};

export default HeadBar;
