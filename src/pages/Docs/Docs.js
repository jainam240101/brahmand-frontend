/** @format */

import React, { useEffect } from "react";
import classes from "./Docs.module.css";
import Litepaper from "../../assets/Docs/Litepaper.png";
import Gaming_Economics from "../../assets/Docs/Gaming Economics.png";
import Video from "../../assets/Docs/Video.png";
import Button from "../../assets/Docs/Download PDF.svg";
import { useLocation } from "react-router-dom";

const Docs = () => {
  const location = useLocation();
  useEffect(() => {
    if (location.hash) {
      let elem = document.getElementById(location.hash.slice(1));
      if (elem) {
        elem.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
    console.log(location.hash);
  }, [location]);

  return (
    <div className={classes.Container}>
      <section id='litepaper' className={classes.Litepaper}>
        <div>
          <p className={classes.Heading}>Litepaper</p>
          <img src={Button} alt='Button' />
        </div>
        <div className={classes.LitepaperImage}>
          <img src={Litepaper} alt='Litepaper' />
        </div>
      </section>
      <section id='gaming_economics' className={classes.Gaming_Economics}>
        <div className={classes.GamingEconomicsImage}>
          <img src={Gaming_Economics} alt='Gaming_Economics' />
        </div>
        <div>
          <p className={classes.Heading}>Gaming Economics</p>
          <img src={Button} alt='Button' />
        </div>
      </section>
      <section id='video' className={classes.WatchVideo}>
        <div>
          <p className={classes.Heading}>Watch Video</p>
        </div>
        <div className={classes.VideoImage}>
          <img src={Video} alt='Litepaper' />
        </div>
      </section>
    </div>
  );
};

export default Docs;
