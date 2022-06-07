/** @format */

import React from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../assets/Navbar/Logo.svg";
import classes from "./Navbar.module.css";

const NonAnimatedNavbar = () => {
  const { pathname } = useLocation();
  return (
    <div className={classes.Container}>
      <Link to='/home' className={classes.logo}>
        <img src={Logo} alt='Logo' />
      </Link>
      <div className={classes.Links}>
        <Link to='/home'>
          <div
            className={
              pathname === "/home" ? classes.active : classes.inactive
            }>
            Home
          </div>
        </Link>
        <Link to='/about'>
          <div
            className={
              pathname === "/about" ? classes.active : classes.inactive
            }>
            About
          </div>
        </Link>
        <Link to='/documents'>
          <div
            className={
              pathname === "/documents" ? classes.active : classes.inactive
            }>
            Documents
          </div>
        </Link>
        <Link to='/faq'>
          <div
            className={pathname === "/faq" ? classes.active : classes.inactive}>
            FAQ
          </div>
        </Link>
      </div>
    </div>
  );
};

export default NonAnimatedNavbar;
