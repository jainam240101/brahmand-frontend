import React from 'react'
import classes from "./TopContainer.module.css";
import Stardust from "../../../assets/Home/Stardust.png";
import Stars from "../../../assets/Home/Stars.svg";

const TopContainer = () => {
  return (
    <>
      <div className={classes.BrahmandLogo}>BRAHMAND</div>
      <div className={classes.TextInsideGlobe}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.{" "}
      </div>
      <div className={classes.starDust}>
        <img src={Stardust} alt='home' />
      </div>
      <img className={classes.stars} src={Stars} alt='home' />
      <div className={classes.spacing} />
      <div className={classes.textLayer1}>
        <div className={classes.textWrap}>
          <div className={classes.dot} />
          <div className={classes.text}>Join Community</div>
        </div>
        <div className={classes.textWrap}>
          <div className={classes.dot} />
          <div className={classes.text}>About Game</div>
        </div>
      </div>
      <div className={classes.textLayer2}>
        <div className={classes.textWrap}>
          <div className={classes.dot} />
          <div className={classes.text}>Watch Trailer</div>
        </div>
        <div className={classes.textWrap}>
          <div className={classes.dot} />
          <div className={classes.text}>Download Litepaper</div>
        </div>
      </div>
      <div className={classes.textLayer3}>
        <div className={classes.dot} />
        <div className={classes.text}>Buy NFT</div>
      </div>
    </>
  );
}

export default TopContainer