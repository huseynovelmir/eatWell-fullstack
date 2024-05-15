import React from "react";
import style from "./style.module.scss";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <div className={style.header}>
      <div className={style.container}>
        <a href="/" className={style.logo}>
          EATWELL
        </a>
        <ul>
          <li>
            <NavLink
              to="Home"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="About"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="Offer"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Offer
            </NavLink>
          </li>
          <li>
            <NavLink
              to="Menu"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Menu
            </NavLink>
          </li>
          <li>
            <NavLink
              to="Galery"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Galery
            </NavLink>
          </li>
          <li>
            <NavLink
              to="Contact"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
