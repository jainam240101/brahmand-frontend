/** @format */

import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/Navbar/Logo.svg";
import classes from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={classes.Container}>
      <Link to='/home' className={classes.logo}>
        <img src={Logo} alt='Logo' />
      </Link>
      <div className={classes.Links}>
        <Link to='/home' className={classes.link}>
          <div>Home</div>
        </Link>
        <Link to='/about' className={classes.link}>
          <div>About</div>
        </Link>
        <Link to='/documents' className={classes.link}>
          <div>Documents</div>
        </Link>
        <Link to='/faq' className={classes.link}>
          <div>FAQ</div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
