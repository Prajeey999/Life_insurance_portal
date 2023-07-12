import React, { useEffect } from 'react';
import styled from 'styled-components';
import './dash.css';
import Carder from './Carder';
import { Link } from 'react-router-dom';


const Container = styled.div`
  /* Styles for the container */
`;

const Input = styled.input`
  /* Styles for the input */
`;

const Label = styled.label`
  /* Styles for the label */
`;

const Nav = styled.nav`
  /* Styles for the nav */
`;

const Sidebar = () => {
  useEffect(() => {
    const body = document.querySelector("body");
    const sidebar = body.querySelector("nav");
    const toggle = body.querySelector(".toggle");
    const searchBtn = body.querySelector(".search-box");
    const modeSwitch = body.querySelector(".toggle-switch");
    const modeText = body.querySelector(".mode-text");

    toggle.addEventListener("click", () => {
      sidebar.classList.toggle("close");
    });

    searchBtn.addEventListener("click", () => {
      sidebar.classList.remove("close");
    });

    modeSwitch.addEventListener("click", () => {
      body.classList.toggle("dark");

      if (body.classList.contains("dark")) {
        modeText.innerText = "Light mode";
      } else {
        modeText.innerText = "Dark mode";
      }
    });
  }, []);

  return (
    <Container>
      <Input id="menu__toggle" type="checkbox" />
      <Label className="menu__btn" htmlFor="menu__toggle">
        <span></span>
      </Label>
      <Nav className="sidebar">
        <header>
          <div className="image-text">
            <span className="image">
              <img src="https://blogger.googleusercontent.com/img/a/AVvXsEgjA6FdqLFps5zaTKQjQJaEThc8nqqk-qq8BTrxjoc1a2DWIJ2wb-eTf1R4hYRwC4UDqdR2kOish2vKcemBjYQEh0waLfZ4wcteJvy0TISrdbPWZm8udx730Ow7nj-oU_-7ZJGQSWWU8iAa_FG3BZ02BK1gpXYzmxj-s42fk4D0WrooBR6bypV9ImrSOg=s800" alt="" />
            </span>
            <div className="text logo-text">
              <span className="name">NovaGuard</span>
              <span className="profession">Nandha Kumar.P</span>
            </div>
          </div>
          <i className="bx bx-chevron-right toggle"></i>
        </header>
        <div className="menu-bar">
          <div className="menu">
            <li className="search-box">
              <i className="bx bx-search icon"></i>
              <input type="text" placeholder="Search..." />
            </li>
            <ul className="menu-links">
              <li className="nav-link">
                <Link to='/home'>
                  <i className="bx bx-home-alt icon"></i>
                  <span className="text nav-text">Dashboard</span>
                </Link>
              </li>
              <li className="nav-link">
                <Link to='/revenue'>
                  <i className="bx bx-bar-chart-alt-2 icon"></i>
                  <span className="text nav-text">Revenue</span>
                </Link>
              </li>
              <li className="nav-link">
                <a href="#">
                  <i className="bx bx-bell icon"></i>
                  <span className="text nav-text">Notifications</span>
                </a>
              </li>
              <li className="nav-link">
                <a href="#">
                  <i className="bx bx-pie-chart-alt icon"></i>
                  <span className="text nav-text">Analytics</span>
                </a>
              </li>
              <li className="nav-link">
                <a href="#">
                  <i className="bx bx-wallet icon"></i>
                  <span className="text nav-text">Wallets</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="bottom-content">
            <li className="">
              <a href="/">
                <i className="bx bx-log-out icon"></i>
                <span className="text nav-text">Logout</span>
              </a>
            </li>
            <li className="mode">
              <div className="sun-moon">
                <i className="bx bx-moon icon moon"></i>
                <i className="bx bx-sun icon sun"></i>
              </div>
              <span className="mode-text text">Dark mode</span>
              <div className="toggle-switch">
                <span className="switch"></span>
              </div>
            </li>
          </div>
        </div>
      </Nav>
    </Container>
  );
};

export default Sidebar;
