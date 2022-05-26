import React from 'react';

const Navbar = (props) => {
  return (
    <nav className="navbar">
      <i className="navbar-logo fa-solid fa-leaf"></i>
      <span>Habit Tracker</span>
      <span className="navbar-count">{props.totalCount}</span>
    </nav>
  );
};

export default Navbar;
