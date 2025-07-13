import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'
import Logo from "../../assets/Logo.png"
import Navicon from "../../assets/navicon.png"
import Sidebar from '../../sidebar/Sidebar'

import homeBg from "../../assets/banner.png"
import aboutBg from "../../assets/aboutLogo.png"
import destinationBg from "../../assets/destinationLogo.png"
import tipsBg from "../../assets/tipsLogo.png"
import contactBg from "../../assets/contact.png"

const Navbar = () => {
  const location = useLocation(); 
  const currentPath = location.pathname;
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const closeSidebar = () => setSidebarOpen(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 600);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const bgMap = {
    "/": homeBg,
    "/about": aboutBg,
    "/destination": destinationBg,
    "/tips": tipsBg,
    "/contact": contactBg,
  };

  const textMap = {
    "/": {
      title1: "THE COUNTER: 70 Countries    1036 Cities",
      title2: "Leave your mark on all",
      title3: "over the world",
      button: "Read More"
    },
    "/about": { title4: "About us" },
    "/destination": { title4: "Destination" },
    "/tips": { title4: "Travel Tips" },
    "/contact": { title4: "Contact" }
  };

  const backgroundImage = bgMap[currentPath] || homeBg;
  const pageText = textMap[currentPath] || textMap["/"];

  return (
    <div className='navbar' style={{
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      width: "100%",
      height: isMobile ? "60vh" : "90vh",
    }}>

      <div className="navbar-list">
      <div className="menu-icon" onClick={toggleSidebar}>
        ☰
      </div>

      <Sidebar isOpen={sidebarOpen} closeSidebar={closeSidebar} />

      <div className="container">
        <div className="logo">
          <img src={Logo} alt="logo" />
        </div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/destination">Destination</Link></li>
            <li><Link to="/tips">Tips</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
      </div>
      </div>

      <div className="navbar-text-wrap" style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: isMobile ? "center" : "center",
        height: isMobile ? "70%" : "70%",
        marginTop: currentPath === "/" ? "60px" : "30px",
        textAlign: "center",
      }}>

        <div className="navbar-text">
          {pageText.title1 && <h3>{pageText.title1}</h3>}
          {pageText.title2 && <h2>{pageText.title2}</h2>}
          {pageText.title3 && <h2>{pageText.title3}</h2>}
          {pageText.title4 && <h2>{pageText.title4}</h2>}
        </div>

        {currentPath === "/" && pageText.button && (
          <div className="navbar-btn">
            <a href="#">{pageText.button}</a>
          </div>
        )}

        {currentPath === "/" && (
          <div className="navbar-down">
            <p>Scroll Down to Continue</p>
            <img src={Navicon} alt="" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
