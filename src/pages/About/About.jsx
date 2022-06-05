/** @format */

import React from "react";
import classes from "./About.module.css";
import Line from "../../assets/About/Line.svg";
import Play from "../../assets/About/Play.svg";
import Download from "../../assets/About/Download.svg";
import Compass from "../../assets/About/Compass.png";

const About = () => {
  return (
    <div className={classes.Container}>
      <div className={classes.HeroSection}>
        <div className={classes.Heading}>BRAHMAND</div>
        <div className={classes.subHeading}>World's</div>
        <div className={classes.Group}>
          <div>Play</div>
          <div>Create</div>
          <div>License</div>
        </div>
        <img src={Line} className={classes.Line} alt='Line' />
        <div className={classes.btnGroup}>
          <div className={classes.DownloadPaper}>
            <span>Download Litepaper</span>
            <img src={Download} className={classes.Download} alt='Download' />
          </div>
          <div className={classes.playVideo}>
            <img src={Play} className={classes.Play} alt='Play' />
            <span>Play Video</span>
          </div>
        </div>
      </div>
      <div className={classes.Header}>
        Pushing the Metaverse forward through
        <br /> collaboration
      </div>
      <div className={classes.Header2}>
        n scelerisque, tortor eget placerat euismod, mauris sem pretium nulla,
        vel hendrerit neque ex vitae ipsum. Nam est diam, ullamcorper sit amet
        elet finibus quis, auctor eget sapien. Praesent{" "}
      </div>
      <div className={classes.Network}>Our Network</div>
      <div className={classes.Compass}>
        <div className={classes.IP}>IP</div>
        <img src={Compass} alt='Compass' />
        <div className={classes.world}>Our World</div>
      </div>
      <div className={classes.Genesis}>Genesis</div>
    </div>
  );
};

export default About;
