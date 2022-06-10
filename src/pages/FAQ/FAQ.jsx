/** @format */

import React, { useState } from "react";
import classes from "./FAQ.module.css";
import PlusIcon from "../../assets/FAQs/Plus.svg";
import Minus from "../../assets/FAQs/Minus.svg";
import Clip from "../../assets/FAQs/Clip.svg";
import Discord from "../../assets/FAQs/Discord.svg";
import Telegram from "../../assets/FAQs/Telegram.svg";
import Twitter from "../../assets/FAQs/Twitter.svg";
import { motion } from "framer-motion";

const FAQ = () => {
  const data = [
    {
      question: "What is Bramhand?",
      answer:
        "n scelerisque, tortor eget placerat euismod, mauris sem pretium nulla, vel hendrerit neque ex vitae ipsum. Nam est diam, ullamcorper sit amet elet finibus quis, auctor eget sapien. Praesent ",
    },
    {
      question: "How do I play the Game?",
      answer:
        "n scelerisque, tortor eget placerat euismod, mauris sem pretium nulla, vel hendrerit neque ex vitae ipsum. Nam est diam, ullamcorper sit amet elet finibus quis, auctor eget sapien. Praesent ",
    },
    {
      question: "When will the Game be released?",
      answer:
        "n scelerisque, tortor eget placerat euismod, mauris sem pretium nulla, vel hendrerit neque ex vitae ipsum. Nam est diam, ullamcorper sit amet elet finibus quis, auctor eget sapien. Praesent ",
    },
    {
      question: "Lorem ipsum dolor sit amet?",
      answer:
        "n scelerisque, tortor eget placerat euismod, mauris sem pretium nulla, vel hendrerit neque ex vitae ipsum. Nam est diam, ullamcorper sit amet elet finibus quis, auctor eget sapien. Praesent ",
    },
    {
      question: "Lorem ipsum dolor sit amet, consectetur adipiscing?",
      answer:
        "n scelerisque, tortor eget placerat euismod, mauris sem pretium nulla, vel hendrerit neque ex vitae ipsum. Nam est diam, ullamcorper sit amet elet finibus quis, auctor eget sapien. Praesent ",
    },
    {
      question: "Nulla facilisi. Nullam leo nibh, fringilla?",
      answer:
        "n scelerisque, tortor eget placerat euismod, mauris sem pretium nulla, vel hendrerit neque ex vitae ipsum. Nam est diam, ullamcorper sit amet elet finibus quis, auctor eget sapien. Praesent ",
    },
    {
      question: "Quisque non leo neque?",
      answer:
        "n scelerisque, tortor eget placerat euismod, mauris sem pretium nulla, vel hendrerit neque ex vitae ipsum. Nam est diam, ullamcorper sit amet elet finibus quis, auctor eget sapien. Praesent ",
    },
    {
      question: "Quisque quam felis, tempus ut quam?",
      answer:
        "n scelerisque, tortor eget placerat euismod, mauris sem pretium nulla, vel hendrerit neque ex vitae ipsum. Nam est diam, ullamcorper sit amet elet finibus quis, auctor eget sapien. Praesent ",
    },
    {
      question: "Maris porttitor bibendum dictum?",
      answer:
        "n scelerisque, tortor eget placerat euismod, mauris sem pretium nulla, vel hendrerit neque ex vitae ipsum. Nam est diam, ullamcorper sit amet elet finibus quis, auctor eget sapien. Praesent ",
    },
    {
      question: "Quisque non leo neque?",
      answer:
        "n scelerisque, tortor eget placerat euismod, mauris sem pretium nulla, vel hendrerit neque ex vitae ipsum. Nam est diam, ullamcorper sit amet elet finibus quis, auctor eget sapien. Praesent ",
    },
    {
      question: "Lorem ipsum dolor sit amet?",
      answer:
        "n scelerisque, tortor eget placerat euismod, mauris sem pretium nulla, vel hendrerit neque ex vitae ipsum. Nam est diam, ullamcorper sit amet elet finibus quis, auctor eget sapien. Praesent ",
    },
    {
      question: "Lorem ipsum dolor sit amet, consectetur adipiscing?",
      answer:
        "n scelerisque, tortor eget placerat euismod, mauris sem pretium nulla, vel hendrerit neque ex vitae ipsum. Nam est diam, ullamcorper sit amet elet finibus quis, auctor eget sapien. Praesent ",
    },
    {
      question: "Nulla facilisi. Nullam lee nibh, fringilla?",
      answer:
        "n scelerisque, tortor eget placerat euismod, mauris sem pretium nulla, vel hendrerit neque ex vitae ipsum. Nam est diam, ullamcorper sit amet elet finibus quis, auctor eget sapien. Praesent ",
    },
  ];
  return (
    <div className={classes.Container}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1,
        }}>
        <div className={classes.Heading}>FAQS</div>
        <div className={classes.AccordionElements}>
          {data.map((element, index) => (
            <Accordion
              key={index}
              answer={element.answer}
              question={element.question}
            />
          ))}
        </div>
        <div className={classes.Socials}>
          <div>
            <img src={Discord} alt='Discord' />
            <img src={Telegram} alt='Telegram' />
            <img src={Twitter} alt='Twitter' />
          </div>
          <div>Join Our Community</div>
        </div>
      </motion.div>
    </div>
  );
};

export default FAQ;

const Accordion = ({ question, answer }) => {
  const [showAnswer, setshowAnswer] = useState(false);
  return (
    <div className={classes.AccordionContainer}>
      <div className={classes.topPart}>
        <div className={classes.Question}>
          {showAnswer && <img src={Clip} alt='Clip' />}
          <div>{question}</div>
        </div>
        <div className={classes.PlusIcon}>
          {showAnswer ? (
            <img
              onClick={() => setshowAnswer(!showAnswer)}
              src={Minus}
              alt='Minus'
            />
          ) : (
            <img
              onClick={() => setshowAnswer(!showAnswer)}
              src={PlusIcon}
              alt='PlusIcon'
            />
          )}
        </div>
      </div>
      {showAnswer && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
          transition={{ ease: "easeInOut", duration: 1 }}
          exit={{ opacity: 0 }}
          className={classes.Answer}>
          {answer}
        </motion.div>
      )}
    </div>
  );
};
