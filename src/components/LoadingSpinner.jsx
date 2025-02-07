import React from 'react';
import './css/spiner.css'

const LoadingSpinner = () => {
  return (
    <div className="loader-container">
      <div className="loader-wrapper">
        <div className="loader">
          <div className="loader-inner"></div>
        </div>
      </div>
      <p className="loading-text">Loading amazing projects...</p>
    </div>
  );
};

export default LoadingSpinner;
