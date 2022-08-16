/** @format */

import React, { useEffect } from "react";
import classes from "./Common.module.css";

const Network = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={classes.Container}>
      <div className={classes.NetworkHero} />
      <div className={classes.Heading}>Our Network</div>
      <div className={classes.Text}>
        A network of virtual worlds on the Brahmand Network, accessed through a
        central ‘Metaport’ within the heart of Brahmand World, the first virtual
        world in existence; encompassed through an immersive 3D experience
        architecturally inspired by the ideology of infinite virtual expansion
        throughout the universe. Brahmand openly invites creators to build on
        the Brahmand Network and showcase their interpretation of a virtual
        world through pioneering interoperability, or alternatively build
        alongside the Brahmand core team within Brahmand World itself.
      </div>
    </div>
  );
};

export default Network;
