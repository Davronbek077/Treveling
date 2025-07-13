import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = ({ isOpen, closeSidebar }) => {
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className="close-btn" onClick={closeSidebar}>✕</div>
      <ul>
        <li><Link to="/" onClick={closeSidebar}>Home</Link></li>
        <li><Link to="/about" onClick={closeSidebar}>About Us</Link></li>
        <li><Link to="/destination" onClick={closeSidebar}>Destination</Link></li>
        <li><Link to="/tips" onClick={closeSidebar}>Tips</Link></li>
        <li><Link to="/contact" onClick={closeSidebar}>Contact</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
