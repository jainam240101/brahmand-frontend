/** @format */

import React, { useEffect } from "react";
import classes from "./Common.module.css";

const World = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={classes.Container}>
      <div className={classes.WorldHero} />
      <div className={classes.Heading}>Brahmand: The Virtual World</div>
      <div className={classes.Text}>
        The universe as we know it is an intergalactic infinity of time and
        space; however, according to ancient Indian history and mythology, the
        universe is home to 14 realms or ‘Lokas’ or planetary systems. It is
        believed that the elder god, Brahma, infused and blessed the universe
        with all forms of life and energies. It is this underlying ideology that
        has paved the way for both the architectural and visual development of
        the Brahmand virtual world.
      </div>
      <div className={classes.Text}>
        Within this techno-mythic expanse resides Dwarka, a terrestrial empire,
        simulating signatory styles and boasting untold treasures, such as
        weapons, warships, and armour. By embedding ancient mythological IP and
        narrative throughout the Brahmand world, users can fully immerse
        themselves in unique environments whilst expanding their existence
        through internal gameplay. Exploration begins at the Metaport with
        initial realm hopping, followed by space travel as you obtain the
        necessary assets from questing, PVM/PVP, trading, and other interactive
        experiences.
      </div>
      <div className={classes.Text}>
        Countless live, build, earn and play opportunities will be delegated to
        respective virtual worlds in the network. The only limit is the
        builder's imagination, as multiple virtual worlds on the network will
        have different themes, and functionalities as decided or delegated by
        the creator community. For example, in Brahmand World, users can play
        and use their earned rewards to upgrade their lives and assets,
        including purchasing properties, vehicles, avatars, and upgrades for
        their pre-existing assets. Upgrading assets will play an integral role
        in widening the scope of user participation on the Brahmand Network.
      </div>
    </div>
  );
};

export default World;
