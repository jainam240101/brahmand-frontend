/** @format */

import React, { useEffect, useState } from "react";
import classes from "./Common.module.css";
import ReadMore from "../../assets/CTAs/ReadMore.svg";
import ReadLess from "../../assets/CTAs/ReadLess.svg";

const Story = () => {
  const [readMore, setreadMore] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={classes.Container}>
      <div className={classes.StoryHero} />
      <div className={classes.Heading}>Brahmand: Story</div>
      <div className={classes.Text}>
        The universe..an endless blanket of stars and vast galaxies. A
        beautiful, limitless, gateway to undiscovered frontiers. Researchers
        tell us that our universe actually takes the form of an egg, something
        ancient Indian mythology discovered over 5000 years ago. Within those
        same scriptures, ‘The Brahmand’ is a universe created by the Elder God
        ‘Brahma’. Each of these universes has 14 realms, lokas, or plains of
        existence, which Brahma infused with all forms of life and wonders.
        Earth lies on the central realm inhabited by humans, whilst the realms
        above and below are populated by celestial across several planetary
        systems.
      </div>
      <div className={classes.Text}>
        It all began with the trinity of the celestials:
        <br />
        Brahma, the creator
        <br /> Vishnu, the preserver
        <br /> Shiva, the destroyer
      </div>
      <div className={classes.Text}>
        Brahma created and formed the universe, lokas (the realms), and worlds,
        with all forms of life within it. Vishnu through his avatars protects
        the foundations on which these worlds are built, through Dharma. Dharma
        constitutes of duties, rights, laws, conduct, virtues and "right way of
        living" within these worlds. When the realms and worlds are saturated
        with Adharma(discord, disharmony, unnaturalness, wrongness, evil,
        immorality, unrighteousness, wickedness, and vice) Shiva destroys these
        worlds and another cycle of creation begins. With every cycle, life
        forms evolve but the cause of their downfall is always the same.
      </div>
      {readMore && (
        <>
          <div className={classes.Text}>
            Life as we know it is exemplified through specific goals, and laws
            of the universe.
          </div>
          <div className={classes.Text}>
            1. Dharma: A mode of conduct most conducive to spiritual advancement
            <br />
            2. Artha: The material prosperity one pursues
            <br />
            3. Kama: Enjoyment of the material world
            <br />
            4. Moksha: Liberation from suffering caused by dependence on the
            material world and from the cycle of birth and rebirth
          </div>
          <div className={classes.Text}>
            Brahma first created the 4 Kumaras (the first beings/children), the
            Manasputra’s/Prajapati, followed by the Saptarishi’s (the 7 great
            sages). The clans of demigods born from Kashyapa (and more?) are
            Devas, Asuras, Yaksha’s, Gandharavas, Apsaras, Nagas, Daityas,
            Yakshas, Danavas, Garuda including all animals and trees. All born
            of the same father, but different mothers, making them stepchildren.
            These demigods were bestowed with superhuman powers and abilities to
            protect lesser beings and maintain order in all the realms. All were
            worshipped by lesser beings(humans/mortals).
          </div>
          <div className={classes.Text}>
            There was a time when beauty and order governed the universe in
            harmony. The air was purifying and wind cleansed all impurities. The
            water was pristine and rejuvenating. Earth flourished, and life
            quickly nurtured with the origin of thought and seed.
          </div>
          <div className={classes.Text}>
            As time passed, the Asuras grew proud and greedy, craving to use
            their power for personal gain. They began to control and manipulate
            weaker beings in order to rule worlds as their own personal
            kingdoms. Mortals had appealed to the Devas for help. Some of the
            Devas were indifferent to the complaints and prayers of the mortals,
            they thought that the Asuras deserved their power and earned their
            personal gains. Others were furious at the Asuras for the misuse of
            their gifts. Finally, after some debate, the Devas took their
            petition to the Trinity, who heard them out. Angered by the actions
            of the Asuras, the Trinity quickly took away all the wealth, power
            and slaves they had accumulated. The Asurans were given a strict
            warning to reform their conduct, so balance can be restored. This
            left them angered, feeling outraged that they could be treated in
            this way. Eventually this caused the Asuras to rebel against the
            Trinity who confronted them and ceased the rebellion. This only made
            the Asuras even more enraged.
          </div>
          <div className={classes.Text}>
            With the guidance of their Guru Shukracharya, the Asuras began to
            identify weaknesses of the Devas and began invading their world. The
            Trinity, with all their strength and energy, crushed the uprising of
            the Asuras, imposing even harsher penalties. They declared that
            henceforth the Asuras would no longer have immortal lives like the
            rest of the Devas, they would die like any mortal being. The rebel
            Asuras were all condemned to death. But Guru Shukracharya used the
            secret of resurrection with the Sanjeevani Mantra bringing the dead
            Asuras back to life. The Asuras gathered together in force and thus
            began the start of the Great Asura-Deva War. The War went on for
            eons, through many cycles of Creation and Destruction of the
            Universe. There were many attempts at truce, negotiation and even
            compromise.
          </div>
          <div className={classes.Text}>
            One such incident of truce was the Samudra Manthan, when the Trinity
            told the Asuras that they would churn the celestial ocean to create
            magical treasures, one being Amrit (Nectar of the gods). Drinking
            the Amrit would make the Asuras immortal again, as they had once
            been. Right now, even though their Guru could revive them, the
            Asuras still had to suffer the agony of death - by drinking the
            Amrit, they would be spared this agony and would be reinstated as
            Devas.
          </div>
          <div className={classes.Text}>
            The Trinity had attempted this truce because the War was affecting
            harmony between the lokas across the universe. Destruction and
            devastation across populations was polluting the natural resources,
            bringing disease, misfortune, unhappiness, and other evils upon all
            species and forms of life. Watching the Devas and Asuras at war,
            also spread violence across mortals, enabling them to wage their own
            wars, contaminating the whole universe. The Tridevi, the Three
            Goddesses of the Trinity, demanded it to stop. They asked the
            Trinity to find a compromise and end the War before all Creation as
            we knew it was ruined. The Trinity negotiated the compromise and the
            Devas and Asuras came to a truce.
          </div>
          <div className={classes.Text}>
            They churned the ocean together and produced many magical treasures,
            beings, and the Amrit. But when the time came to share the Amrit,
            the Asuras plan was to once again use their immortality immediately
            against the Devas to gain the upper hand once and for all. The
            Trinity learned of the Asuras’ treachery and their plan to attack
            the Devas as soon as they drank the Amrit. Something had to be done,
            Vishnu took once of his avatars to hypnotize the Asuras into
            believing they were having Amrit. One such Asura even took the form
            a Deva and was about to consume the nectar but Vishnu chopped of his
            head before he could consume it.
          </div>
          <div className={classes.Text}>
            The universe as we know it had changed, deadlier than before. Worlds
            began to decay, populations obliterated, lifespans reduced. Children
            and mothers died in childbirth. People were born with deformities,
            weaknesses, debilitating conditions. There seemed to be no end to
            the curses that were brought on.
          </div>
          <div className={classes.Text}>
            Over time, some of the dissenting Devas felt the state of
            destruction had gone on long enough and felt some compromise had to
            be met, where there was co-existence. Some Devas suggested to let
            the Asuras do as they please to mortals and lesser beings, so long
            as it did not affect the Devas themselves. The Trinity and Tridevi
            disagreed. They felt it was the dharma of Devas to protect lesser
            beings and mortals. And it was the dharma of the Asuras to use their
            superpowers for good not evil. Brahma began to create additional
            realms to drive the Asura’s into. The lower realms of Naraka.
            Meanwhile the Asuras attacked yet again in force, whilst Shiva faced
            them single-handedly, duplicating himself and embodying the Trinity
            itself. The Asuras believed themselves to be fighting the Trinity as
            they were led into the lower realms by Shiva, where they were given
            dominion on different realms. A shortlived truce was reached.
          </div>
          <div className={classes.Text}>
            The Asuras resided in the lower realms guarding precious material
            and wealth. Mortals resided in the central realms, and the Devas in
            the upper realms. Portals were created and regulated in certain the
            realms for inter-loka travel. (Bhuloka) Earth housed the central
            portals through which all inter realm travel was routed.
          </div>
          <div className={classes.Text}>
            Even with this ‘truce’, the battles for power and control over
            portals and realms continue between the Devas and Asuras through the
            aeons. Many a times Earth being the centre of these wars with
            mankind pulled in both directions. Sides were drawn. Some bound by
            blood and duty, others by matrimony and political advantage.
            Thousands of clans began to form, with generations continuing to be
            wiped out on every side. All that was left at the end was ash,
            blood, and tears. Until one open portal changed everything…
          </div>
        </>
      )}
      <div className={classes.ReadMore}>
        {readMore ? (
          <img
            onClick={() => setreadMore(!readMore)}
            src={ReadLess}
            alt='ReadMore'
            draggable={false}
          />
        ) : (
          <img
            onClick={() => setreadMore(!readMore)}
            src={ReadMore}
            alt='ReadMore'
            draggable={false}
          />
        )}
      </div>
      <div className={classes.MobileReadMore}>
        {readMore ? (
          <div onClick={() => setreadMore(!readMore)}>Read Less</div>
        ) : (
          <div onClick={() => setreadMore(!readMore)}>Read More</div>
        )}
      </div>
    </div>
  );
};

export default Story;
