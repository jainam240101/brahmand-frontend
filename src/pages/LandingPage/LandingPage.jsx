/** @format */

import React from "react";
import classes from "./LandingPage.module.css";
import Logo from "../../assets/LandingPage/Logo.png";
import Primary from "../../assets/LandingPage/Primary.svg";
import Discord from "../../assets/LandingPage/Discord.svg";
import Telegram from "../../assets/LandingPage/Telegram.svg";
import Twitter from "../../assets/LandingPage/Twitter.svg";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const [opacity, setOpacity] = React.useState(1);
  const navigate = useNavigate();

  const handleClick = () => {
    setOpacity(0);
    setTimeout(() => {
      navigate("/home", { state: { animate: true } });
    }, 4100);
  };

  return (
    <div className={classes.HeroSection}>
      <motion.div
        animate={{
          opacity: opacity,
        }}
        transition={{
          duration: 4,
          ease: "easeIn",
        }}
        className={classes.Home}
      >
        <img className={classes.Logo} src={Logo} alt="Logo" />
        <button className={classes.enterbtn} onClick={handleClick}>
          <img src={Primary} alt="Logo" />
        </button>
        <div className={classes.socials}>
          <img src={Twitter} alt="Twitter" />
          <img src={Discord} alt="Discord" />
          <img src={Telegram} alt="Telegram" />
        </div>
      </motion.div>
    </div>
  );
};

export default LandingPage;
