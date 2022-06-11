/** @format */

import React from "react";
import classes from "./Footer.module.css";
import Discord from "../../assets/FAQs/Discord.svg";
import Telegram from "../../assets/FAQs/Telegram.svg";
import Twitter from "../../assets/FAQs/Twitter.svg";

const Footer = () => {
  return (
    <div className={classes.Footer}>
      <div className={classes.community}>
        <div>Join Our Community</div>
        <div className={classes.Socials}>
          <img src={Discord} alt='Discord' />
          <img src={Telegram} alt='Telegram' />
          <img src={Twitter} alt='Twitter' />
        </div>
      </div>
      <div className={classes.tagline}>
        <div className={classes.dot} />
        <div className={classes.text}>2022 Brahmand by Eros Investments. All Rights Reserved</div>
      </div>
    </div>
  );
};

export default Footer;
