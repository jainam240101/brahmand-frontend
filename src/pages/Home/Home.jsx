/** @format */

import React from "react";
import { useLocation } from "react-router-dom";
import Discord from "../../assets/FAQs/Discord.svg";
import Telegram from "../../assets/FAQs/Telegram.svg";
import Twitter from "../../assets/FAQs/Twitter.svg";
import NonAnimatedNavbar from "../../Components/Navbar/NonAnimatedNavbar";
import TopContainer from "./Components/TopContainer";
import classes from "./Home.module.css";

const Home = () => {
  const { state } = useLocation();

  const animate = state?.animate;
  return (
    <div className={classes.Container}>
      {!animate && <NonAnimatedNavbar />}
      <TopContainer />
      <div className={classes.heading}>Lorem Ipsum Lorem Ipsum.....</div>
      <div className={classes.Body}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut non dolor
        sapien. Praesent libero lectus, volutpat at lorem at, sodales accumsan
        metus. Ut vitae sapien euismod, consectetur enim ut, ultrices dui.
        Praesent dapibus aliquam dictum. Sed molestie eu mi ultricies dignissim.
        Quisque vel pulvinar elit. Vestibulum ante ipsum primis in faucibus orci
        luctus et ultrices posuere cubilia curae; Praesent malesuada eu sem in
        luctus. Donec in hendrerit urna, sed pretium sem.
      </div>
      <div className={classes.Body}>
        In scelerisque, tortor eget placerat euismod, mauris sem pretium nulla,
        vel hendrerit neque ex vitae ipsum. Nam est diam, ullamcorper sit amet
        eleifend non, sodales in leo. Praesent tellus lorem, consectetur quis
        vulputate at, auctor a erat. Donec facilisis in nunc ac commodo. Sed
        tincidunt odio sed vulputate ultrices. Sed eget condimentum urna.
        Phasellus enim arcu, rutrum vitae tincidunt sit amet, pretium et ex.
        Nunc vitae arcu luctus, imperdiet neque eget, cursus felis. Proin ante
        risus, tempus eget finibus quis, auctor eget sapien. Praesent
      </div>
      <div className={classes.Body}>
        Morbi bibendum convallis eros, venenatis lobortis diam fringilla eu.
        Duis elit mi, semper quis egestas interdum, vestibulum id lectus.
        Quisque dignissim id purus at euismod. Aliquam ac quam nec nisi molestie
        ornare in non risus. Sed rhoncus lorem in faucibus rhoncus. Aenean
        posuere enim aliquam magna egestas condimentum. Donec pellentesque,
        metus uaeos. Nulla nisi augue, semper sit amet dictum id, ornare ut
        mauris. Suspendisse potenti.
      </div>
      <div className={classes.Body}>
        Morbi id auctor elit. Integer id odio quam. Quisque eu tempor libero, id
        rhoncus nulla. Fusce vitae tincidunt lorem. Vivamus blandit metus
        interdum justo malesuada, ac pretium est venenatis. Praesent sit amet
        turpis tellus. Nam cursus dapibus convallis. Aenean imperdiet sem ut
        tortor ultrices, id lacinia risus blandit.
      </div>
      <div className={classes.btnGroup}>
        <button className={classes.litepaper}>Read Litepaper</button>
        <button className={classes.learnMore}>Learn More</button>
      </div>
    </div>
  );
};

export default Home;
