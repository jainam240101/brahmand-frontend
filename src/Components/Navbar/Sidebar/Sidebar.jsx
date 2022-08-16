/** @format */

import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import classes from "./Sidebar.module.css";
import Cross from "../../../assets/Navbar_Footer/Cross.svg";
import SidebarLine from "../../../assets/Navbar_Footer/SidebarLine.svg";

function Sidebar({ sideBar, setSideBar }) {
  return (
    <AnimatePresence>
      {sideBar && (
        <>
          <motion.div
            initial={{ x: "100%" }}
            animate={{
              x: "0%",
            }}
            exit={{
              x: "150%",
            }}
            transition={{ type: "spring", bounce: 0, duration: 1 }}
            className={classes.Container}>
            <div className={classes.Links}>
              <div onClick={() => setSideBar(false)} className={classes.Close}>
                <img src={Cross} alt='Cross' />
              </div>
              <div>
                <img src={SidebarLine} alt='SidebarLine' />
              </div>
              <Link onClick={() => setSideBar(false)} to='/home'>
                <div className={classes.link}>Home</div>
              </Link>
              <div>
                <img src={SidebarLine} alt='SidebarLine' />
              </div>
              <Link onClick={() => setSideBar(false)} to='/about'>
                <div className={classes.link}>About</div>
              </Link>
              <div>
                <img src={SidebarLine} alt='SidebarLine' />
              </div>
              <Link onClick={() => setSideBar(false)} to='/docs'>
                <div className={classes.link}>Docs</div>
              </Link>
              <div>
                <img src={SidebarLine} alt='SidebarLine' />
              </div>
              <Link onClick={() => setSideBar(false)} to='/team'>
                <div className={classes.link}>Team</div>
              </Link>
              <div>
                <img src={SidebarLine} alt='SidebarLine' />
              </div>
              <Link onClick={() => setSideBar(false)} to='/faq'>
                <div className={classes.link}>FAQ</div>
              </Link>
              <div>
                <img src={SidebarLine} alt='SidebarLine' />
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{ type: "spring", bounce: 0, duration: 0.2 }}
            onClick={() => setSideBar(false)}
            className={classes.backdrop}
          />
        </>
      )}
    </AnimatePresence>
  );
}

export default Sidebar;
