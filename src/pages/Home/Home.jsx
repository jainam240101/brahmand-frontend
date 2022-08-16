/** @format */

import React, { useState } from "react";
import classes from "./Home.module.css";
import Ring from "../../assets/Home/Ring.svg";
import Logo from "../../assets/Home/Logo.svg";
import RegisterHere from "../../assets/Home/RegisterHere.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Space from "../../Components/space/Space";
import { motion } from "framer-motion";
import Trailer from "../../Components/Trailer/Trailer";
import AnimatedNavbar from "../../Components/Navbar/AnimatedNavbar";
import MobilePhone from "./MobilePhone";
import Navbar from "../../Components/Navbar/Navbar";

const HtmlDiv = ({ children, ...props }) => <div {...props}>{children}</div>;

const Home = () => {
  const navigate = useNavigate();
  const [ctaText, setctaText] = useState("Buy NFT");
  const { state } = useLocation();
  const [videoModal, setvideoModal] = useState(false);

  const handleClick = () => {
    setvideoModal(false);
  };

  if (window.innerWidth < 500) {
    return (
      <>
        {state?.animate ? <AnimatedNavbar /> : <Navbar />}
        <MobilePhone />
      </>
    );
  }

  console.log(state?.animate);
  const DivComp = state?.animate ? motion.div : HtmlDiv;

  const onHover = () => {
    if (ctaText === "Buy NFT") {
      setctaText("Coming Soon");
    } else {
      setctaText("Buy NFT");
    }
  };

  return (
    <>
      <div className={classes.Container}>
        <DivComp
          initial={{ opacity: 0, y: "-50%" }}
          animate={{
            opacity: [0, 1],
            y: ["-50%", "0%"],
          }}
          transition={{
            duration: 1,
            ease: "easeIn",
          }}
          className={classes.Ring}
        >
          <img draggable="false" src={Ring} alt="Ring" />
        </DivComp>
        <DivComp
          initial={{ opacity: 0, y: "30%" }}
          animate={{
            opacity: [0, 1],
          }}
          transition={{
            duration: 1,
            delay: 1,
            ease: "easeIn",
          }}
          className={classes.Logo}
        >
          <img draggable="false" src={Logo} alt="Ring" />
        </DivComp>
        <AnimatedText className={classes.TextLayer1}>
          <div className={classes.Text}>
            <a target="_blank" rel="noreferrer" href="https://www.google.com/">
              Join Community
            </a>
          </div>
          <div
            onClick={() => setvideoModal(true)}
            className={`${classes.Text} ${classes.WatchTrailer}`}
          >
            Watch Trailer
          </div>
        </AnimatedText>
        <AnimatedText className={classes.TextLayer2}>
          <div onClick={() => navigate("/world")} className={classes.Text}>
            Our Virtual World
          </div>
          <div className={classes.Text}>
            <a target="_blank" rel="noreferrer" href="https://www.google.com/">
              Download Litepaper
            </a>
          </div>
        </AnimatedText>
        <AnimatedText className={classes.TextLayer3}>
          <div
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            className={classes.Text}
          >
            <Link to="/coming-soon">{ctaText}</Link>
          </div>
        </AnimatedText>
        <AnimatedText>
          <div className={classes.Heading}>Our Virtual World</div>
          <div style={{ marginTop: "25px" }} className={classes.subText}>
            The Brahmand virtual world is created using our{" "}
            <a href="/">original IP</a> that is inspired by ancient Indian
            mythology. The virtual world is centered around various story driven
            game modes, quests and other activities; all promoting user
            engagement, building of community and continual circular commerce.
            Users can interact and experience the unique stories and art in an
            ever-expanding multiplayer virtual “Universe”.
          </div>
          <Space />
          <Space />
          <Space />
          <div className={classes.subText}>
            The logic used to build the Brahmand Universe stipulates that the
            universe is split vertically into 14 <Link to="/lokas">Lokas</Link>{" "}
            planetary systems. Our world building begins on a planet in the Bhu
            Loka /central realm. The virtual world contains a city with endless
            opportunities for all users. The city is designed and planned by a
            core team with the intention of progressive decentralization and
            creation of land that can be used to create community lead projects.
          </div>
          <Space />
          <Space />
          <Space />
          <div className={classes.subText}>
            Within the city there are activities created by the core team such
            as social events and multiplayer games that cater to all audiences.
            Users can explore the open-world area of the royal city and earn
            currency through various earn mechanics. This currency can be used
            to improve the virtual lives of users by purchasing and crafting
            decentralized assets.
          </div>
          <Space />
          <Space />
          <div className={classes.subText}>
            The virtual universe can expand vertically with the creation of
            planets across the 6 higher and 7 lower Lokas. And further,
            horizontally with the creation of more planets in each Loka.
          </div>
          <div className={classes.btnGroup}>
            <Link to="/faq" className={classes.Register}>
              <img draggable="false" src={RegisterHere} alt="RegisterHere" />
            </Link>
            <button
              onClick={() => navigate("/network")}
              className={classes.learnMore}
            >
              Learn More
            </button>
          </div>
        </AnimatedText>
        {videoModal && (
          <Trailer handleClick={handleClick} showSkipButton={true} />
        )}
        {state?.animate ? <AnimatedNavbar /> : <Navbar />}
      </div>
    </>
  );
};

export default Home;

const AnimatedText = ({ className, children }) => {
  const { state } = useLocation();
  const DivComp = state?.animate ? motion.div : HtmlDiv;
  return (
    <DivComp
      initial={{ opacity: 0 }}
      animate={{
        opacity: [0, 0.8],
      }}
      transition={{
        duration: 1,
        delay: 2,
        ease: "easeIn",
      }}
      className={className}
    >
      {children}
    </DivComp>
  );
};
