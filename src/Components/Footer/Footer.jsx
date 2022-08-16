/** @format */

import React from "react";
import classes from "./Footer.module.css";
import Telegram from "../../assets/Navbar_Footer/Telegram.svg";
import Discord from "../../assets/Navbar_Footer/Discord.svg";
import Twitter from "../../assets/Navbar_Footer/Twitter.svg";
import Space from "../space/Space";

const Footer = () => {
  return (
    <div className={classes.Footer}>
      <div className={classes.Socials}>
        <div className={classes.socialGrp}>
          <img src={Twitter} alt='Twitter' />
          <img src={Discord} alt='Discord' />
          <img src={Telegram} alt='Telegram' />
        </div>
        <div>Join Our Community</div>
      </div>
      <div className={classes.Community}>
        <div className={classes.Text}>
          2022 Brahmand by Eros Investments. All Rights Reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
