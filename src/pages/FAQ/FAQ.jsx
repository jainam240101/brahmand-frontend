/** @format */

import React, { useState } from "react";
import classes from "./FAQ.module.css";
import PlusIcon from "../../assets/FAQs/Plus.svg";
import FAQ_Bar from "../../assets/FAQs/FAQ_Bar.svg";
import Clip from "../../assets/FAQs/Clip.svg";
import Discord from "../../assets/FAQs/Discord.svg";
import Telegram from "../../assets/FAQs/Telegram.svg";
import Twitter from "../../assets/FAQs/Twitter.svg";

const FAQ = () => {
  const [FAQ_Data, setFAQ_Data] = useState({ question: "", answer: "" });
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

  const showFaqData = (index) => {
    console.log(index);
    const temp = { ...FAQ_Data };
    temp.question = data[index].question;
    temp.answer = data[index].answer;
    setFAQ_Data(temp);
  };

  return (
    <div className={classes.Container}>
      <div className={classes.Heading}>FAQS</div>
      <div className={classes.Flex}>
        <div className={classes.FAQs}>
          <div className={classes.Divider}>
            <img src={FAQ_Bar} alt='FAQ_Bar' />
          </div>
          <div className={classes.AccordionElements}>
            {data.map((element, index) => (
              <Accordion
                key={index}
                onClick={showFaqData}
                question={element.question}
                index={index}
              />
            ))}
          </div>
        </div>
        <div className={classes.Answer}>
          <div className={classes.FAQ_Question}>{FAQ_Data.question}</div>
          <br />
          <div className={classes.FAQ_Answer}>{FAQ_Data.answer}</div>
        </div>
      </div>
      <div className={classes.Socials}>
        <div>
          <img src={Discord} alt='Discord' />
          <img src={Telegram} alt='Telegram' />
          <img src={Twitter} alt='Twitter' />
        </div>
        <div>Join Our Community</div>
      </div>
    </div>
  );
};

export default FAQ;

const Accordion = ({ question, index, onClick }) => {
  return (
    <div className={classes.Accordion}>
      <div className={classes.Question}>
        <img src={Clip} alt='Clip' />
        <div>{question}</div>
      </div>
      <div className={classes.PlusIcon}>
        <img onClick={() => onClick(index)} src={PlusIcon} alt='PlusIcon' />
      </div>
    </div>
  );
};
