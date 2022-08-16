/** @format */

import React, { useEffect } from "react";
import classes from "./About.module.css";
import Line from "../../assets/About/Line.svg";
import Compass from "../../assets/About/Compass.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className={classes.Container}>
      {/* <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
        duration: 2,
        }}> */}
        <div className={classes.HeroSection}>
          <div className={classes.Heading}>EXPERIENCE ECONOMY</div>
          <img src={Line} className={classes.Line} alt='Line' />
          <div className={classes.Group}>
            <div className={classes.play}>PLAY</div>
            <div>EARN</div>
            <div className={classes.live}>LIVE</div>
          </div>
        </div>
        <div className={classes.Header}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odio mattis. Class
          aptent taciti sociosqu ad litora torquent per conubia nostra, per
          inceptos himenaeos.
        </div>
        <Link to='/network' className={classes.Network}>
          Network
        </Link>
        <div className={classes.Compass}>
          <Link to='/story' className={classes.Story}>
            Story
          </Link>
          <img src={Compass} alt='Compass' />
          <Link to='/world' className={classes.World}>
            World
          </Link>
        </div>
        <Link to='/lokas' className={classes.Lokas}>
          Lokas
        </Link>
      {/* </motion.div> */}
    </div>
  );
};

export default About;
