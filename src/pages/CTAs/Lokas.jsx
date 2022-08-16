/** @format */

import React, { useEffect, useState } from "react";
import classes from "./Common.module.css";
import { data as LokasData } from "./data";
import PhoneDiscs from "./PhoneDiscs";
import HoverRing from "../../assets/CTAs/Hover_Ring.png";
import YellowRing from "../../assets/CTAs/YellowRing.png";
import Space from "../../Components/space/Space";

const Lokas = () => {
  const [showModal, setshowModal] = useState(false);
  const [modalData, setmodalData] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const openModal = (text) => {
    setshowModal(true);
    setmodalData(LokasData[text]);
  };
  const closeModal = () => {
    setshowModal(false);
  };

  return (
    <div className={classes.Container}>
      <div className={classes.Info}>
        Click on each ring to see what each Loka has in store for you.
      </div>
      <Space />
      <Space />
      <Space />
      <Space />
      <div className={classes.Discs}>
        <div className={classes.Disc}>
          <img
            onClick={() => openModal("Satyaloka")}
            height={"34px"}
            width={"228px"}
            src={HoverRing}
            alt='HoverRing'
          />
          <p
            onClick={() => openModal("Satyaloka")}
            className={classes.LokaText}>
            SATYALOKA
          </p>
        </div>
        <div className={classes.Disc}>
          <img
            onClick={() => openModal("TapaLoka")}
            height={"34px"}
            width={"266px"}
            src={HoverRing}
            alt='HoverRing'
          />
          <p onClick={() => openModal("TapaLoka")} className={classes.LokaText}>
            TAPALOKA
          </p>
        </div>
        <div className={classes.Disc}>
          <img
            onClick={() => openModal("Maharloka")}
            height={"35px"}
            width={"299px"}
            src={HoverRing}
            alt='HoverRing'
          />
          <p
            onClick={() => openModal("Maharloka")}
            className={classes.LokaText}>
            MAHARLOKA
          </p>
        </div>
        <div className={classes.Disc}>
          <img
            onClick={() => openModal("JanaLoka")}
            height={"35px"}
            width={"336px"}
            src={HoverRing}
            alt='HoverRing'
          />
          <p onClick={() => openModal("JanaLoka")} className={classes.LokaText}>
            JANALOKA
          </p>
        </div>
        <div className={classes.Disc}>
          <img
            onClick={() => openModal("Svarloka")}
            height={"46px"}
            width={"378px"}
            src={HoverRing}
            alt='HoverRing'
          />
          <p onClick={() => openModal("Svarloka")} className={classes.LokaText}>
            SWARGLOKA
          </p>
        </div>
        <div className={classes.Disc}>
          <img
            onClick={() => openModal("Bhuvarloka")}
            height={"53px"}
            width={"429px"}
            src={HoverRing}
            alt='HoverRing'
          />
          <p
            onClick={() => openModal("Bhuvarloka")}
            className={classes.LokaText}>
            BHUVARLOKA
          </p>
        </div>
        <div className={classes.Disc}>
          <img
            onClick={() => openModal("Bhurloka")}
            height={"53px"}
            width={"481px"}
            src={HoverRing}
            alt='HoverRing'
          />
          <p onClick={() => openModal("Bhurloka")} className={classes.LokaText}>
            BHURLOKA
          </p>
        </div>
        <div className={classes.Disc}>
          <img
            onClick={() => openModal("Atala")}
            height={"53px"}
            width={"429px"}
            src={YellowRing}
            alt='HoverRing'
          />
          <p
            onClick={() => openModal("Atala")}
            className={classes.LokaText}
            style={{ color: "#CFB370" }}>
            ATALA
          </p>
        </div>
        <div className={classes.Disc}>
          <img
            onClick={() => openModal("Vitala")}
            height={"46px"}
            width={"378px"}
            src={YellowRing}
            alt='HoverRing'
          />
          <p
            onClick={() => openModal("Vitala")}
            className={classes.LokaText}
            style={{ color: "#CFB370" }}>
            VITALA
          </p>
        </div>
        <div className={classes.Disc}>
          <img
            onClick={() => openModal("Sutala")}
            height={"35px"}
            width={"338px"}
            src={YellowRing}
            alt='HoverRing'
          />
          <p
            onClick={() => openModal("Sutala")}
            className={classes.LokaText}
            style={{ color: "#CFB370" }}>
            SUTALA
          </p>
        </div>
        <div className={classes.Disc}>
          <img
            onClick={() => openModal("Talatala")}
            height={"35px"}
            width={"300px"}
            src={YellowRing}
            alt='HoverRing'
          />
          <p
            onClick={() => openModal("Talatala")}
            className={classes.LokaText}
            style={{ color: "#CFB370" }}>
            TALATALA
          </p>
        </div>
        <div className={classes.Disc}>
          <img
            onClick={() => openModal("Mahatala")}
            height={"35px"}
            width={"266px"}
            src={YellowRing}
            alt='HoverRing'
          />
          <p
            onClick={() => openModal("Mahatala")}
            className={classes.LokaText}
            style={{ color: "#CFB370" }}>
            MAHATALA
          </p>
        </div>
        <div className={classes.Disc}>
          <img
            onClick={() => openModal("Rastala")}
            height={"35px"}
            width={"228px"}
            src={YellowRing}
            alt='HoverRing'
          />
          <p
            onClick={() => openModal("Rastala")}
            className={classes.LokaText}
            style={{ color: "#CFB370" }}>
            RASTALA
          </p>
        </div>
        <div className={classes.Disc}>
          <img
            onClick={() => openModal("Patala")}
            height={"35px"}
            width={"204px"}
            src={YellowRing}
            alt='HoverRing'
          />
          <p
            onClick={() => openModal("Patala")}
            className={classes.LokaText}
            style={{ color: "#CFB370" }}>
            PATALA
          </p>
        </div>
      </div>
      <PhoneDiscs />
      {showModal && <Modal closeModal={closeModal} image={modalData} />}
    </div>
  );
};

const Modal = ({ image, closeModal }) => {
  return (
    <div className={classes.OuterContainers}>
      <div className={classes.ModalContainer}>
        <img draggable={false} src={image} alt='modal ' />
        <div onClick={closeModal} className={classes.Close}>
          +
        </div>
      </div>
    </div>
  );
};

export default Lokas;
