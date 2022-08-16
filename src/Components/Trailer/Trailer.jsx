/** @format */

import React from "react";
import classes from "./Trailer.module.css";
import { motion } from "framer-motion";
import Cross from "../../assets/LandingPage/Cross.png";

const Trailer = ({ showSkipButton = false, handleClick }) => {
  return (
    <motion.div
      className={classes.OuterContainer}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 1,
      }}
    >
      <div className={classes.InnerContainer}>
        <iframe
          src={"https://www.youtube.com/embed/hLrXAl-2-CA "}
          title="Trailer"
          allowFullScreen
        />
        {showSkipButton && (
          <div className={classes.SkipTrailer}>
            <img onClick={handleClick} src={Cross} alt="Cross" />
          </div>
        )}
        {/* {showSkipButton && (
          <div className={classes.Button}>
            <button onClick={handleClick}>Continue</button>
          </div>
        )} */}
      </div>
    </motion.div>
  );
};

export default Trailer;
