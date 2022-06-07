/** @format */

import React from "react";
import classes from "./LandingPage.module.css";
import Logo from "../../assets/LandingPage/Logo.png";
import Primary from "../../assets/LandingPage/Primary.svg";
import Discord from "../../assets/LandingPage/Discord.svg";
import Telegram from "../../assets/LandingPage/Telegram.svg";
import Twitter from "../../assets/LandingPage/Twitter.svg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const LandingPage = () => {
  return (
    <motion.div
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: 4,
        ease: "easeIn",
      }}
      exit={{ opacity: [1, 0] }}
      className={classes.Home}>
      <img className={classes.Logo} src={Logo} alt='Logo' />
      <Link className={classes.enterbtn} to={"/home"}>
        <img src={Primary} alt='Logo' />
      </Link>
      <div className={classes.socials}>
        <img src={Twitter} alt='Twitter' />
        <img src={Discord} alt='Discord' />
        <img src={Telegram} alt='Telegram' />
      </div>
    </motion.div>
  );
};

export default LandingPage;
