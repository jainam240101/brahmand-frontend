/** @format */

import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import classes from "./Sidebar.module.css";

function Sidebar({ sideBar, setSideBar }) {
  console.log(sideBar);
  return (
    <AnimatePresence>
      {sideBar && (
        <>
          <motion.div
            initial={{ x: "-100%" }}
            animate={{
              x: 0,
            }}
            exit={{
              x: "-100%",
            }}
            transition={{ type: "spring", bounce: 0, duration: 1 }}
            className={classes.Container}>
            <div className={classes.Links}>
              <div onClick={() => setSideBar(false)} className={classes.Close}>
                +
              </div>
              <Link onClick={() => setSideBar(false)}  to='/home'>
                <div className={classes.link}>Home</div>
              </Link>
              <Link onClick={() => setSideBar(false)} to='/about'>
                <div className={classes.link}>About</div>
              </Link>
              <Link onClick={() => setSideBar(false)}  to='/documents'>
                <div className={classes.link}>Documents</div>
              </Link>
              <Link onClick={() => setSideBar(false)}  to='/faq'>
                <div className={classes.link}>FAQ</div>
              </Link>
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
