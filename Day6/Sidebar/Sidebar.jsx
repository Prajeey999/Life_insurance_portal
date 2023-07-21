import React, { useEffect } from 'react';
import '../Sidebar/Sidebar.scss'
import { FaRegCreditCard,FaSearch, FaChalkboardTeacher ,FaUserEdit,FaPhoneSquareAlt,FaMoon,FaRegSun,FaSignOutAlt} from "react-icons/fa";
const Sidebar = () => {
  useEffect(() => {
    const body = document.querySelector("body"),
      sidebar = body.querySelector("nav"),
      toggle = body.querySelector(".toggle"),
      searchBtn = body.querySelector(".search-box"),
      modeSwitch = body.querySelector(".toggle-switch"),
      modeText = body.querySelector(".mode-text");

    const toggleSidebar = () => {
      sidebar.classList.toggle("close");
    };

    const toggleDarkMode = () => {
      body.classList.toggle("dark");

      if (body.classList.contains("dark")) {
        modeText.innerText = "Light mode";
      } else {
        modeText.innerText = "Dark mode";
      }
    };

    toggle.addEventListener("click", toggleSidebar);
    searchBtn.addEventListener("click", () => sidebar.classList.remove("close"));
    modeSwitch.addEventListener("click", toggleDarkMode);

    // Clean up the event listeners when the component is unmounted
    return () => {
      toggle.removeEventListener("click", toggleSidebar);
      searchBtn.removeEventListener("click", () => sidebar.classList.remove("close"));
      modeSwitch.removeEventListener("click", toggleDarkMode);
    };
  }, []); // Empty dependency array to run the effect only once

  return (
    
    <div className='contaminate'>
      <input id="menu__toggle" type="checkbox" />
      <label className="menu__btn" htmlFor="menu__toggle">
        <span></span>
      </label>
      <nav className="sidebar">
        <header>
          <div className="image-text">
            <span className="image">
              <img src="../src/img/ngw.gif"alt="" />
            </span>
            <div className="text logo-text">
              <span className="name">Nova Guard</span>
              <span className="profession">NadhaKumar</span>
            </div>
          </div>
          <i className='toggle'></i>
        </header>
        <div className="menu-bar">
          <div className="menu">
            <li className="search-box">
              <i className='bx bx-search icon'><FaSearch /></i>
              <input type="text" placeholder="Search..." />
            </li>
            <ul className="menu-links">
              <li className="nav-link">
                <a href="/dash">
                  <i className='bx bx-home-alt icon'><FaChalkboardTeacher /></i>
                  <span className="text nav-text">Dashboard</span>
                </a>
              </li>
              <li className="nav-link">
                <a href="/profile">
                  <i className='bx bx-bar-chart-alt-2 icon'><FaUserEdit /></i>
                  <span className="text nav-text">Profile</span>
                </a>
              </li>
              <li className="nav-link">
                <a href="/contact">
                  <i className='bx bx-bell icon'><FaPhoneSquareAlt /></i>
                  <span className="text nav-text">Contact Us</span>
                </a>
              </li>
              <li className="nav-link">
                <a href="/payment">
                  <i className='bx bx-bell icon'><FaRegCreditCard /></i>
                  <span className="text nav-text">Add Payment</span>
                </a>
              </li>
              {/* <li className="nav-link">
                <a href="#">
                  <i className='bx bx-pie-chart-alt icon'></i>
                  <span className="text nav-text">Analytics</span>
                </a>
              </li>
              <li className="nav-link">
                <a href="#">
                  <i className='bx bx-wallet icon'></i>
                  <span className="text nav-text">Wallets</span>
                </a>
              </li> */}
            </ul>
          </div>
          <div className="bottom-content">
            <li className="">
              <a href="/login">
                <i className='bx bx-log-out icon'><FaSignOutAlt /></i>
                <span className="text nav-text">Logout</span>
              </a>
            </li>
            <li className="mode">
              <div className="sun-moon">
                <i className='bx bx-moon icon moon'><FaMoon /></i>
                <i className='bx bx-sun icon sun'><FaRegSun /></i>
              </div>
              <span className="mode-text text">Dark mode</span>
              <div className="toggle-switch">
                <span className="switch"></span>
              </div>
            </li>
          </div>
        </div>
      </nav>
      {/* <section className="home">

      </section> */}
    </div>
  );
};

export default Sidebar;
