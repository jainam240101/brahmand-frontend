/** @format */

import React from "react";
import classes from "./Team.module.css";
import Wedge from "../../assets/Team/Wedge.svg";
import Space from "../../Components/space/Space";
import Card from "../../Components/Card/Card";
import { motion } from "framer-motion";

const Team = () => {
  return (
    <div className={classes.Container}>
      {/* <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 2,
        }}> */}
        <div className={classes.Heading}>Our Team</div>
        <Space />
        <Space />
        <Space />
        <Space />
        <div className={classes.SubText}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </div>
        <Space />
        <Space />
        <Space />
        <Space />
        <div className={classes.Cards}>
          <Card
            image={
              "https://i.pinimg.com/originals/ef/2d/9d/ef2d9daca0f54589ed4ebc0a2d5eb2e4.jpg"
            }
            name={"Harvey Specter"}
            designation={"Senior Partner"}
            role={"Lawyer"}
          />
          <Card
            image={
              "https://i.pinimg.com/originals/ef/2d/9d/ef2d9daca0f54589ed4ebc0a2d5eb2e4.jpg"
            }
            name={"Harvey Specter"}
            designation={"Senior Partner"}
            role={"Lawyer"}
          />
          <Card
            image={
              "https://i.pinimg.com/originals/ef/2d/9d/ef2d9daca0f54589ed4ebc0a2d5eb2e4.jpg"
            }
            name={"Harvey Specter"}
            designation={"Senior Partner"}
            role={"Lawyer"}
          />
          <Card
            image={
              "https://i.pinimg.com/originals/ef/2d/9d/ef2d9daca0f54589ed4ebc0a2d5eb2e4.jpg"
            }
            name={"Harvey Specter"}
            designation={"Senior Partner"}
            role={"Lawyer"}
          />
        </div>
        <div className={classes.Wedge}>
          <img src={Wedge} alt='Wedge' />
        </div>
        <Space />
        <Space />
        <Space />
        <Space />
        <Space />
        <div className={classes.Heading}>Our Contributors</div>
        <Space />
        <Space />
        <Space />
        <div className={classes.SubText}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </div>
        <Space />
        <Space />
        <Space />
        <div className={classes.Cards}>
          <Card
            image={
              "https://i.pinimg.com/originals/ef/2d/9d/ef2d9daca0f54589ed4ebc0a2d5eb2e4.jpg"
            }
            name={"Harvey Specter"}
            designation={"Senior Partner"}
            role={"Lawyer"}
          />
          <Card
            image={
              "https://i.pinimg.com/originals/ef/2d/9d/ef2d9daca0f54589ed4ebc0a2d5eb2e4.jpg"
            }
            name={"Harvey Specter"}
            designation={"Senior Partner"}
            role={"Lawyer"}
          />
          <Card
            image={
              "https://i.pinimg.com/originals/ef/2d/9d/ef2d9daca0f54589ed4ebc0a2d5eb2e4.jpg"
            }
            name={"Harvey Specter"}
            designation={"Senior Partner"}
            role={"Lawyer"}
          />
          <Card
            image={
              "https://i.pinimg.com/originals/ef/2d/9d/ef2d9daca0f54589ed4ebc0a2d5eb2e4.jpg"
            }
            name={"Harvey Specter"}
            designation={"Senior Partner"}
            role={"Lawyer"}
          />
        </div>
        <div className={classes.Wedge}>
          <img src={Wedge} alt='Wedge' />
        </div>
        <Space />
        <Space />
        <Space />
        <Space />
        <Space />
        <div className={classes.Heading}>Our Advisors</div>
        <Space />
        <Space />
        <Space />
        <div className={classes.SubText}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </div>
        <Space />
        <Space />
        <Space />
        <div className={classes.Cards}>
          <Card
            image={
              "https://i.pinimg.com/originals/ef/2d/9d/ef2d9daca0f54589ed4ebc0a2d5eb2e4.jpg"
            }
            name={"Harvey Specter"}
            designation={"Senior Partner"}
            role={"Lawyer"}
          />
          <Card
            image={
              "https://i.pinimg.com/originals/ef/2d/9d/ef2d9daca0f54589ed4ebc0a2d5eb2e4.jpg"
            }
            name={"Harvey Specter"}
            designation={"Senior Partner"}
            role={"Lawyer"}
          />
          <Card
            image={
              "https://i.pinimg.com/originals/ef/2d/9d/ef2d9daca0f54589ed4ebc0a2d5eb2e4.jpg"
            }
            name={"Harvey Specter"}
            designation={"Senior Partner"}
            role={"Lawyer"}
          />
          <Card
            image={
              "https://i.pinimg.com/originals/ef/2d/9d/ef2d9daca0f54589ed4ebc0a2d5eb2e4.jpg"
            }
            name={"Harvey Specter"}
            designation={"Senior Partner"}
            role={"Lawyer"}
          />
        </div>
      {/* </motion.div> */}
    </div>
  );
};

export default Team;
