/** @format */

import React from "react";
import classes from "./TopContainer.module.css";
import Stardust from "../../../assets/Home/Stardust.png";
import Stars from "../../../assets/Home/Stars.svg";
import { motion } from "framer-motion";
import Logo from "../../../assets/LandingPage/Logo.png";
import { useLocation } from "react-router-dom";
import Navbar from "../../../Components/Navbar/Navbar";

const HtmlDiv = ({ children, ...props }) => (
  <motion.div
    {...props}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{
      duration: 1,
    }}>
    {children}
  </motion.div>
);

const TopContainer = () => {
  const { state } = useLocation();

  const DivComp = state?.animate ? motion.div : HtmlDiv;

  return (
    <>
      <Navbar />
      <DivComp
        initial={{ opacity: 0, y: "30%" }}
        animate={{
          opacity: [0, 1],
        }}
        transition={{
          duration: 2,
          delay: 6,
          ease: "easeInOut",
        }}
        className={classes.BrahmandLogo}>
        <img src={Logo} alt='Logo' />
      </DivComp>
      <DivComp
        initial={{ opacity: 0, y: "20%" }}
        animate={{
          opacity: [0, 0.6],
        }}
        transition={{
          duration: 1,
          delay: 8,
          ease: "easeInOut",
        }}
        className={classes.TextInsideGlobe}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </DivComp>
      {/* <div className={classes.TextInsideGlobe}></div> */}
      <DivComp
        initial={{ opacity: 0, y: "-50%" }}
        animate={{
          opacity: [0, 1],
          y: ["-50%", "0%"],
        }}
        transition={{
          delay: 2,
          duration: 4,
          ease: "easeOut",
        }}
        className={classes.starDust}>
        <img src={Stardust} alt='home' />
      </DivComp>
      <DivComp
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.45, 0.9, 1] }}
        transition={{
          // delay: 1,
          duration: 1,
        }}>
        <img className={classes.stars} src={Stars} alt='home' />
      </DivComp>
      <div className={classes.spacing} />
      <AnimatedText className={classes.textLayer1}>
        <div className={classes.textWrap}>
          <div className={classes.dot} />
          <div className={classes.text}>Join Community</div>
        </div>
        <div className={classes.textWrap}>
          <div className={classes.dot} />
          <div className={classes.text}>About Game</div>
        </div>
      </AnimatedText>
      <AnimatedText className={classes.textLayer2}>
        <div className={classes.textWrap}>
          <div className={classes.dot} />
          <div className={classes.text}>Watch Trailer</div>
        </div>
        <div className={classes.textWrap}>
          <div className={classes.dot} />
          <div className={classes.text}>Download Litepaper</div>
        </div>
      </AnimatedText>

      <AnimatedText className={classes.textLayer3}>
        <div className={classes.dot} />
        <div className={classes.text}>Buy NFT</div>
      </AnimatedText>
    </>
  );
};

const AnimatedText = ({ className, children }) => {
  const { state } = useLocation();

  const DivComp = state?.animate ? motion.div : HtmlDiv;

  return (
    <DivComp
      initial={{ opacity: 0 }}
      animate={{
        opacity: [0, 0.8],
      }}
      transition={{
        duration: 1,
        delay: 10,
        ease: "easeInOut",
      }}
      className={className}>
      {children}
    </DivComp>
  );
};

export default TopContainer;
