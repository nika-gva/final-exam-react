import React from "react";
import styles from "./banner.module.scss";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <motion.section className={styles.banner}>
      <motion.div
        initial={{
          x: -300,
        }}
        animate={{
          x: 0,
          transition: {
            duration: 0.3,
          },
        }}
      >
        <h1 className="text-[22px]">frontend developer</h1>
        <h1 className="max-w-[200px] text-[25px]">
          Hi, i am <span className="text-[26px] font-bold">Nika Gvarliani</span>{" "}
          from Georgia
        </h1>
      </motion.div>
      <motion.div
        initial={{
          y: 200,
        }}
        animate={{
            y:-1,
            transition:{ duration:1 }
        }}
        className={styles.bgImage}
      ></motion.div>
    </motion.section>
  );
};

export default Banner;
