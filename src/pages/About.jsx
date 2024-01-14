import React from "react";
import styles from "../styles/about.module.scss";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className={styles.about}>
      <motion.h1
        initial={{ x: -200 }}
        whileInView={{ x: 0, transition: { duration: 0.5 } }}
        className="text-[30px] font-bold mb-[70px]"
      >
        About
      </motion.h1>
      <motion.div>
        
      </motion.div>
    </div>
  );
};

export default About;
