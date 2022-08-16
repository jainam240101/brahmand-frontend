/** @format */

import React, { useEffect, useState } from "react";
import classes from "./Navbar.module.css";
import Logo from "../../assets/Navbar_Footer/Logo.svg";
import { Link, useLocation } from "react-router-dom";
import Hamburger from "../../assets/Navbar_Footer/Hamburger.svg";
import Sidebar from "./Sidebar/Sidebar";

const Navbar = ({ imageShow }) => {
  const { pathname } = useLocation();
  const [sidebar, setsidebar] = useState(false);
  const [path, setpath] = useState("");
  const [buttonText, setbuttonText] = useState("Play Now");
  useEffect(() => {
    setpath(pathname.split("/")[1]);
  }, []);
  const HoverButton = () => {
    if (buttonText === "Play Now") {
      setbuttonText("Coming Soon");
    }
    if (buttonText === "Coming Soon") {
      setbuttonText("Play Now");
    }
  };
  return (
    <div className={classes.Container}>
      {imageShow && (
        <Link to='/home' className={classes.Logo}>
          <img src={Logo} alt='Logo' />
        </Link>
      )}
      <div className={classes.Link}>
        <Link
          state={{ animate: false }}
          onClick={() => setpath("home")}
          className={
            path === "home" ? classes.ActiveLink : classes.InactiveLink
          }
          to='/home'>
          HOME
        </Link>
        <Link
          onClick={() => setpath("about")}
          className={
            path === "about" ? classes.ActiveLink : classes.InactiveLink
          }
          to='/about'>
          ABOUT
        </Link>
        <Link
          onClick={() => setpath("docs")}
          className={
            path === "docs" ? classes.ActiveLink : classes.InactiveLink
          }
          to='/docs'>
          DOCS
        </Link>
        <Link
          onClick={() => setpath("team")}
          className={
            path === "team" ? classes.ActiveLink : classes.InactiveLink
          }
          to='/team'>
          TEAM
        </Link>
        <Link
          onClick={() => setpath("faq")}
          className={path === "faq" ? classes.ActiveLink : classes.InactiveLink}
          to='/faq'>
          FAQ
        </Link>
      </div>
      {imageShow && (
        <button
          onMouseEnter={HoverButton}
          onMouseLeave={HoverButton}
          className={classes.ComingSoon}>
          {buttonText}
        </button>
      )}
      <div onClick={() => setsidebar(true)} className={classes.HamburgerIcon}>
        <img src={Hamburger} alt='Hamburger' />
      </div>
      <Sidebar sideBar={sidebar} setSideBar={setsidebar} />
    </div>
  );
};

export default Navbar;
