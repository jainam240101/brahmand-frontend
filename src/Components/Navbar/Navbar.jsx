/** @format */

import React from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../assets/Navbar/Logo.svg";
import classes from "./Navbar.module.css";
import { motion } from "framer-motion";

const Navbar = () => {
  const { pathname } = useLocation();
  return (
    <motion.div
      initial={{ opacity: 0, y: "-50%" }}
      animate={{
        opacity: [0, 1],
        y: ["-50%", "0%"],
      }}
      transition={{
        delay: 10,
        duration: 4,
        ease: "backInOut",
      }}
      className={classes.Container}>
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
    </motion.div>
  );
};

export default Navbar;
