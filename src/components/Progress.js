import React from 'react';

const Progress = ({ progress }) => {
  return (
    <div className="progress-bar">
      <div className="progress-bar-fill" style={{ width: `${progress}%` }}>
        <span>{progress}%</span>
      </div>
    </div>
  );
};

export default Progress;