/** @format */

import React from "react";
import classes from "./Card.module.css";
import Twitter from "../../assets/LandingPage/Twitter.svg";
import Instagram from "../../assets/LandingPage/Instagram.svg";
import Space from "../space/Space";

const Card = ({ image, name, designation, role, twitter, instagram }) => {
  return (
    <div className={classes.Container}>
      <div className={classes.Image}>
        <img src={image} alt='coverPic' />
      </div>
      <div className={classes.Black}>
        <Space />
        <div className={classes.Name}>{name}</div>
        <div className={classes.Designation}>{designation}</div>
        <Space />
        <Space />
        <div className={classes.bottomPart}>
          <div className={classes.Role}>{role}</div>
          <div className={classes.Social}>
            <img src={Twitter} alt='Twitter' />
            <img src={Instagram} alt='Instagram' />
          </div>
        </div>
        <Space />
        <Space />
      </div>
    </div>
  );
};

export default Card;
