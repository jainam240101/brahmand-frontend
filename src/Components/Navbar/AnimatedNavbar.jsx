/** @format */

import React, { useEffect, useState } from "react";
import classes from "./Navbar.module.css";
import Logo from "../../assets/Navbar_Footer/Logo.svg";
import { Link, useLocation } from "react-router-dom";
import Hamburger from "../../assets/Navbar_Footer/Hamburger.svg";
import Sidebar from "./Sidebar/Sidebar";
import { motion } from "framer-motion";

const AnimatedNavbar = ({ imageShow }) => {
  const { pathname } = useLocation();
  const [sidebar, setsidebar] = useState(false);
  const [path, setpath] = useState("");
  useEffect(() => {
    setpath(pathname.split("/")[1]);
  }, []);
  return (
    <div className={classes.Container}>
      {imageShow && (
        <Link to="/home" className={classes.Logo}>
          <img src={Logo} alt="Logo" />
        </Link>
      )}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: [0, 0.8],
        }}
        transition={{
          duration: 1,
          delay: 2,
          ease: "backInOut",
        }}
        className={classes.Link}
      >
        <Link
          onClick={() => setpath("home")}
          className={
            path === "home"
              ? classes.HomePageActiveLink
              : classes.HomePageInactiveLink
          }
          to="/home"
        >
          HOME
        </Link>
        <Link
          onClick={() => setpath("about")}
          className={
            path === "about"
              ? classes.HomePageActiveLink
              : classes.HomePageInactiveLink
          }
          to="/about"
        >
          ABOUT
        </Link>
        <Link
          onClick={() => setpath("docs")}
          className={
            path === "docs"
              ? classes.HomePageActiveLink
              : classes.HomePageInactiveLink
          }
          to="/docs"
        >
          DOCS
        </Link>
        <Link
          onClick={() => setpath("team")}
          className={
            path === "team"
              ? classes.HomePageActiveLink
              : classes.HomePageInactiveLink
          }
          to="/team"
        >
          TEAM
        </Link>
        <Link
          onClick={() => setpath("faq")}
          className={
            path === "faq"
              ? classes.HomePageActiveLink
              : classes.HomePageInactiveLink
          }
          to="/faq"
        >
          FAQ
        </Link>
      </motion.div>
      {imageShow && <button className={classes.ComingSoon}>Coming Soon</button>}
      <div onClick={() => setsidebar(true)} className={classes.HamburgerIcon}>
        <img src={Hamburger} alt="Hamburger" />
      </div>
      <Sidebar sideBar={sidebar} setSideBar={setsidebar} />
    </div>
  );
};

export default AnimatedNavbar;
