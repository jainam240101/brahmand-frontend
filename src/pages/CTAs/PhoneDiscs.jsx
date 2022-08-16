/** @format */

import React, { useState } from "react";
import classes from "./Common.module.css";
import { Phone_Modal as LokasData } from "./data";
import HoverRing from "../../assets/CTAs/Hover_Ring.png";
import YellowRing from "../../assets/CTAs/YellowRing.png";

const PhoneDiscs = () => {
  const [showModal, setshowModal] = useState(false);
  const [modalData, setmodalData] = useState(null);

  const openModal = (text) => {
    console.log(text);
    setshowModal(true);
    setmodalData(LokasData[text]);
  };
  const closeModal = () => {
    setshowModal(false);
  };

  return (
    <div className={classes.PhoneLokasContainer}>
      <div className={classes.Disc}>
        <img
          onClick={() => openModal("Satyaloka_Phone_Modal")}
          style={{ height: "35px", width: "160px" }}
          src={HoverRing}
          alt='HoverRing'
        />
        <p
          onClick={() => openModal("Satyaloka_Phone_Modal")}
          className={classes.LokaText}>
          SATYALOKA
        </p>
      </div>

      <div className={classes.Disc}>
        <img
          onClick={() => openModal("TapaLoka_Phone_Modal")}
          height={"40px"}
          width={"200px"}
          src={HoverRing}
          alt='HoverRing'
        />
        <p
          onClick={() => openModal("TapaLoka_Phone_Modal")}
          className={classes.LokaText}>
          TAPALOKA
        </p>
      </div>

      <div className={classes.Disc}>
        <img
          onClick={() => openModal("Maharloka_Phone_Modal")}
          height={"40px"}
          width={"240px"}
          src={HoverRing}
          alt='HoverRing'
        />
        <p
          onClick={() => openModal("Maharloka_Phone_Modal")}
          className={classes.LokaText}>
          MAHARLOKA
        </p>
      </div>

      <div className={classes.Disc}>
        <img
          onClick={() => openModal("JanaLoka_Phone_Modal")}
          style={{ height: "40px", width: "270px" }}
          src={HoverRing}
          alt='HoverRing'
        />
        <p
          onClick={() => openModal("JanaLoka_Phone_Modal")}
          className={classes.LokaText}>
          JANALOKA
        </p>
      </div>
      <div className={classes.Disc}>
        <img
          onClick={() => openModal("Svarloka_Phone_Modal")}
          style={{ height: "40px", width: "310px" }}
          src={HoverRing}
          alt='HoverRing'
        />
        <p
          onClick={() => openModal("Svarloka_Phone_Modal")}
          className={classes.LokaText}>
          SWARGLOKA
        </p>
      </div>

      <div className={classes.Disc}>
        <img
          onClick={() => openModal("Bhuvarloka_Phone_Modal")}
          style={{ height: "40px", width: "340px" }}
          src={HoverRing}
          alt='HoverRing'
        />
        <p
          onClick={() => openModal("Bhuvarloka_Phone_Modal")}
          className={classes.LokaText}>
          BHUVARLOKA
        </p>
      </div>

      <div className={classes.Disc}>
        <img
          onClick={() => openModal("Bhurloka_Phone_Modal")}
          style={{ height: "40px", width: "370px" }}
          src={HoverRing}
          alt='HoverRing'
        />
        <p
          onClick={() => openModal("Bhurloka_Phone_Modal")}
          className={classes.LokaText}>
          BHURLOKA
        </p>
      </div>

      <div className={classes.Disc}>
        <img
          onClick={() => openModal("Atala_Phone_Modal")}
          style={{ height: "40px", width: "340px" }}
          src={YellowRing}
          alt='HoverRing'
        />
        <p
          onClick={() => openModal("Atala_Phone_Modal")}
          className={classes.LokaText}
          style={{ color: "#CFB370" }}>
          ATALA
        </p>
      </div>

      <div className={classes.Disc}>
        <img
          onClick={() => openModal("Vitala_Phone_Modal")}
          style={{ height: "40px", width: "340px" }}
          src={YellowRing}
          alt='HoverRing'
        />
        <p
          onClick={() => openModal("Vitala_Phone_Modal")}
          className={classes.LokaText}
          style={{ color: "#CFB370" }}>
          VITALA
        </p>
      </div>

      <div className={classes.Disc}>
        <img
          onClick={() => openModal("Sutala_Phone_Modal")}
          style={{ height: "40px", width: "310px" }}
          src={YellowRing}
          alt='HoverRing'
        />
        <p
          onClick={() => openModal("Sutala_Phone_Modal")}
          className={classes.LokaText}
          style={{ color: "#CFB370" }}>
          SUTALA
        </p>
      </div>

      <div className={classes.Disc}>
        <img
          onClick={() => openModal("Talatala_Phone_Modal")}
          style={{ height: "40px", width: "270px" }}
          src={YellowRing}
          alt='HoverRing'
        />
        <p
          onClick={() => openModal("Talatala_Phone_Modal")}
          className={classes.LokaText}
          style={{ color: "#CFB370" }}>
          TALATALA
        </p>
      </div>

      <div className={classes.Disc}>
        <img
          style={{ height: "40px", width: "240px" }}
          onClick={() => openModal("Mahatala_Phone_Modal")}
          src={YellowRing}
          alt='HoverRing'
        />
        <p
          onClick={() => openModal("Mahatala_Phone_Modal")}
          className={classes.LokaText}
          style={{ color: "#CFB370" }}>
          MAHATALA
        </p>
      </div>

      <div className={classes.Disc}>
        <img
          onClick={() => openModal("Rastala_Phone_Modal")}
          style={{ height: "40px", width: "200px" }}
          src={YellowRing}
          alt='HoverRing'
        />
        <p
          onClick={() => openModal("Rastala_Phone_Modal")}
          className={classes.LokaText}
          style={{ color: "#CFB370" }}>
          RASTALA
        </p>
      </div>

      <div className={classes.Disc}>
        <img
          onClick={() => openModal("Patala_Phone_Modal")}
          style={{ height: "35px", width: "160px" }}
          src={YellowRing}
          alt='HoverRing'
        />
        <p
          onClick={() => openModal("Patala_Phone_Modal")}
          className={classes.LokaText}
          style={{ color: "#CFB370" }}>
          PATALA
        </p>
      </div>

      {showModal && <Modal closeModal={closeModal} image={modalData} />}
    </div>
  );
};

const Modal = ({ image, closeModal }) => {
  return (
    <div className={classes.PhoneOuterContainers}>
      <div className={classes.PhoneModalContainer}>
        <div onClick={closeModal} className={classes.Close}>
          +
        </div>
        <img draggable={false} src={image} alt='modal ' />
      </div>
    </div>
  );
};

export default PhoneDiscs;
