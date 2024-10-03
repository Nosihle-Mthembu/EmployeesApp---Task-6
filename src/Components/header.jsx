import React from 'react';
// import './Header.css';

const Header = () => {
  return (
    <div class="main-container">
        <header class="header">
            <div class="user-profile">
            <img src="user-profile.jpg" alt="image" class="profile-pic" />
            <h1>John Doe</h1>
            <p>Senior Software Engineer</p>
            </div>
            <div class="search-bar">
            <input type="text" placeholder="Search..." />
            <button>Search</button>
            </div>
        </header>
    </div>

  );
};

export default Header;
