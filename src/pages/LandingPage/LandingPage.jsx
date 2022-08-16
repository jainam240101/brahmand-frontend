/** @format */

import React, { useState } from "react";
import classes from "./LandingPage.module.css";
import Logo from "../../assets/LandingPage/Logo.svg";
import Primary from "../../assets/LandingPage/Primary.svg";
import Discord from "../../assets/LandingPage/Discord.svg";
import Telegram from "../../assets/LandingPage/Telegram.svg";
import Twitter from "../../assets/LandingPage/Twitter.svg";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Trailer from "../../Components/Trailer/Trailer";

const LandingPage = () => {
  const [opacity, setOpacity] = useState(1);
  const [videoModal, setvideoModal] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    setOpacity(0);
    setTimeout(() => {
      navigate("/home", { state: { animate: true } });
    }, 1000);
  };

  return (
    <div className={classes.HeroSection}>
      <motion.div
        animate={{
          opacity: opacity,
        }}
        transition={{
          duration: 1,
          ease: "easeIn",
        }}
        className={classes.Home}
      >
        <img draggable="false" className={classes.Logo} src={Logo} alt="Logo" />
        <button
          className={classes.enterbtn}
          onClick={() => setvideoModal(true)}
        >
          <img draggable="false" src={Primary} alt="Logo" />
        </button>
        {/* <div className={classes.socials}>
          <img draggable='false' src={Twitter} alt='Twitter' />
          <img draggable='false' src={Discord} alt='Discord' />
          <img draggable='false' src={Telegram} alt='Telegram' />
        </div> */}
        {videoModal && (
          <Trailer showSkipButton={true} handleClick={handleClick} />
        )}
      </motion.div>
    </div>
  );
};

export default LandingPage;
