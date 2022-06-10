/** @format */

import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../assets/Navbar/Logo.svg";
import classes from "./Navbar.module.css";
import { motion } from "framer-motion";
import Sidebar from "./Sidebar/Sidebar";

const Navbar = () => {
  const [sidebar, setsidebar] = useState(false);
  const { pathname } = useLocation();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: [0, 1],
      }}
      transition={{
        delay: sidebar ? 0 : 8,
        duration: sidebar ? 0 : 4,
        ease: "backInOut",
      }}
      className={classes.Container}>
      <Link  to='/home' className={classes.logo}>
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
      <div className={classes.mobileNavbar}>
        <div onClick={() => setsidebar(true)} className={classes.BurgerIcon}>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <button className={classes.signUpBtn}>Sign Up</button>
      </div>
      <Sidebar sideBar={sidebar} setSideBar={setsidebar} />
    </motion.div>
  );
};

export default Navbar;
