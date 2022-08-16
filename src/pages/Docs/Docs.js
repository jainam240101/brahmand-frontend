/** @format */

import React from "react";
import classes from "./Docs.module.css";
import Litepaper from "../../assets/Docs/Litepaper.png";
import Gaming_Economics from "../../assets/Docs/Gaming Economics.png";
import Video from "../../assets/Docs/Video.png";
import Button from "../../assets/Docs/Download PDF.svg";

const Docs = () => {
  return (
    <div className={classes.Container}>
      <div className={classes.Litepaper}>
        <div>
          <p className={classes.Heading}>Litepaper</p>
          <img src={Button} alt='Button' />
        </div>
        <div className={classes.LitepaperImage}>
          <img src={Litepaper} alt='Litepaper' />
        </div>
      </div>
      <div className={classes.Gaming_Economics}>
        <div className={classes.GamingEconomicsImage}>
          <img src={Gaming_Economics} alt='Gaming_Economics' />
        </div>
        <div>
          <p className={classes.Heading}>Gaming Economics</p>
          <img src={Button} alt='Button' />
        </div>
      </div>
      <div className={classes.WatchVideo}>
        <div>
          <p className={classes.Heading}>Watch Video</p>
        </div>
        <div className={classes.VideoImage}>
          <img src={Video} alt='Litepaper' />
        </div>
      </div>
    </div>
  );
};

export default Docs;
