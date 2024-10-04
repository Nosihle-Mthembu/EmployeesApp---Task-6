import React from 'react';
import SearchComponent from './search';

const Header = () => {
  return (
    <div className="santorini-component">
      {/* <img src="santorini-image.jpg" alt="Santorini"> */}
      <div className="overlay">
        <h1>Santorini</h1>
        <p>A beautiful city located in the Aegean Sea, Greece.</p>
        <div className="tabs">
          <SearchComponent />
        </div>
      </div>
    </div>
  );
};

export default Header;