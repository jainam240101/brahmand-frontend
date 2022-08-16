/** @format */

import React, { useState } from "react";
import classes from "./Home.module.css";
import MobileHero from "../../assets/Home/mobile_home_hero.svg";
import { motion } from "framer-motion";
import { Link, useLocation, useNavigate } from "react-router-dom";
import RegisterHere from "../../assets/Home/RegisterHere.svg";
import Trailer from "../../Components/Trailer/Trailer";

const HtmlDiv = ({ children, ...props }) => <div {...props}>{children}</div>;

const MobilePhone = () => {
  const navigate = useNavigate();
  const [videoModal, setvideoModal] = useState(false);

  const { state } = useLocation();
  const DivComp = state?.animate ? motion.div : HtmlDiv;

  const handleClick = () => {
    setvideoModal(false);
  };

  return (
    <DivComp className={classes.MobileMainContainer}>
      <div className={classes.MobileBg1}>
        <DivComp
          initial={{ opacity: 0, y: "-50%" }}
          animate={{
            opacity: [0, 1],
            y: ["-50%", "0%"],
          }}
          transition={{
            duration: 2,
            // delay: 2,
            ease: "easeInOut",
          }}
          className={classes.MobileTopContainer}>
          <img src={MobileHero} alt='hero' width={300} />
        </DivComp>
        <div className={classes.MobileLinkContainer}>
          <PhoneAnimatedText className={classes.MobileHorizontalLink1}>
            <div className={classes.MobileText}>
              <a
                target='_blank'
                rel='noreferrer'
                href='https://www.google.com/'>
                Join Community
              </a>
            </div>
            <div
              onClick={() => setvideoModal(true)}
              className={classes.MobileText}>
              Watch Trailer
            </div>
          </PhoneAnimatedText>
          <PhoneAnimatedText className={classes.MobileHorizontalLink2}>
            <div
              onClick={() => navigate("/world")}
              className={classes.MobileText}>
              Our Virtual World
            </div>
            <div className={classes.MobileText}>
              <a
                target='_blank'
                rel='noreferrer'
                href='https://www.google.com/'>
                Download Litepaper
              </a>
            </div>
          </PhoneAnimatedText>
          <PhoneAnimatedText className={classes.MobileHorizontalLink3}>
            <div className={classes.MobileText}>
              <Link
                to="/coming-soon">
                Buy NFT
              </Link>
            </div>
          </PhoneAnimatedText>
        </div>
        <PhoneAnimatedText className={classes.MobileHeading}>
          Our Virtual World
        </PhoneAnimatedText>
      </div>
      <div className={classes.MobileBg2}>
        <PhoneAnimatedText
          style={{ marginTop: "-5px" }}
          className={classes.MobileSubText}>
          The Brahmand virtual world is created using our{" "}
          <a href='/'>original IP</a> that is inspired by ancient Indian
          mythology. The virtual world is centered around various story driven
          game modes, quests and other activities; all promoting user
          engagement, building of community and continual circular commerce.
          Users can interact and experience the unique stories and art in an
          ever-expanding multiplayer virtual “Universe”.  
        </PhoneAnimatedText>
        <PhoneAnimatedText className={classes.MobileSubText}>
          The logic used to build the Brahmand Universe stipulates that the
          universe is split vertically into 14 <Link to='/lokas'>Lokas</Link> /
          planetary systems. Our world building begins on a planet in the Bhu
          Loka /central realm. The virtual world contains a city with endless
          opportunities for all users. The city is designed and planned by a
          core team with the intention of progressive decentralization and
          creation of land that can be used to create community lead projects.
        </PhoneAnimatedText>
        <PhoneAnimatedText className={classes.MobileSubText}>
          Within the city there are activities created by the core team such as
          social events and multiplayer games that cater to all audiences. Users
          can explore the open-world area of the royal city and earn currency
          through various earn mechanics. This currency can be used to improve
          the virtual lives of users by purchasing and crafting decentralized
          assets.      
        </PhoneAnimatedText>
        <PhoneAnimatedText className={classes.MobileSubText}>
          The virtual universe can expand vertically with the creation of
          planets across the 6 higher and 7 lower Lokas. And further,
          horizontally with the creation of more planets in each Loka. 
        </PhoneAnimatedText>
        <div className={classes.MobileButtonGroup}>
          <Link to='/faq'>
            <img
              className={classes.MobileRegister}
              draggable='false'
              src={RegisterHere}
              alt='RegisterHere'
            />
          </Link>
          <button
            onClick={() => navigate("/network")}
            className={classes.MobileLearnMore}>
            Learn More
          </button>
        </div>
      </div>
      {videoModal && (
        <Trailer handleClick={handleClick} showSkipButton={true} />
      )}
    </DivComp>
  );
};

export default MobilePhone;

const PhoneAnimatedText = ({ className, children }) => {
  const { state } = useLocation();
  const DivComp = state?.animate ? motion.div : HtmlDiv;
  return (
    <DivComp
      initial={{ opacity: 0 }}
      animate={{
        opacity: [0, 0.8],
      }}
      transition={{
        duration: 4,
        delay: 1,
        ease: "easeInOut",
      }}
      className={className}>
      {children}
    </DivComp>
  );
};
