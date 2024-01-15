import React, { useEffect, useState } from "react";
import styles from "../styles/about.module.scss";
import { motion } from "framer-motion";
import data from "../../data.json";
import axios from "axios";

const About = () => {
  const [about, setabout] = useState(data.about);
  const [activeItem, setActiveItem] = useState("skills");
  const [skEdEx, setSkEdEx] = useState("");
  useEffect(() => {
    setSkEdEx(data[activeItem]);
  }, [activeItem]);
  return (
    <div className={styles.about}>
      <motion.h1
        initial={{ x: -200 }}
        whileInView={{ x: 0, transition: { duration: 0.5 } }}
        className="text-[30px] font-bold mb-[70px]"
      >
        About
      </motion.h1>
      <motion.div className={styles.aboutBox}>
        <motion.div
          initial={{
            y: 200,
            opacity: 0,
          }}
          whileInView={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.5,
            },
          }}
          className={styles.aboutImage}
        >
          <img src={about.image} alt="" />
        </motion.div>
        <motion.div
          initial={{
            y: 200,
            opacity: 0,
          }}
          whileInView={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.5,
            },
          }}
          className={styles.aboutContent}
        >
          <div>
            <p>
              Hi, I'm Nika, a junior frontend developer with 1 year of
              experience. I specialize in HTML, CSS, and JavaScript, and have
              worked on several projects that demonstrate my skills in creating
              responsive and user-friendly websites. you can see my projects in
              My Work section
            </p>
          </div>
          <ul className="flex gap-4 capitalize">
            <li
              onClick={() => setActiveItem("skills")}
              style={{
                color: activeItem === "skills" && "red",
              }}
            >
              skills
            </li>
            <li
              onClick={() => setActiveItem("education")}
              style={{
                color: activeItem === "education" && "red",
              }}
            >
              education
            </li>
            <li
              onClick={() => setActiveItem("experience")}
              style={{
                color: activeItem === "experience" && "red",
              }}
            >
              experience
            </li>
          </ul>
          <div className={styles.skEdEx}>
            {Object.keys(skEdEx).map((data, index) => {
              return (
                <div key={index}>
                  <li>{data}</li>
                  <div>
                    {skEdEx[data].map((data, index) => {
                      return <p key={index}>{data}</p>;
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;
