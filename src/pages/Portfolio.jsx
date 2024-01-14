import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import styles from "../styles/portfolio.module.scss";
import siteImage from "../assets/site1.png";
import { Link } from "react-router-dom";
import axios from "axios";
import data from "../../db.json";

const Portfolio = () => {
  const [portfolio, setPortfolio] = useState([]);

  const getDaata = async () => {
    try {
      const response = await axios("../../db.json");
      setPortfolio(response.data.portfolioItems);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getDaata();
  }, []);
  return (
    <section className={styles.portfolio}>
      <motion.h1
        initial={{ x: -200 }}
        whileInView={{x:0, transition:{duration: 0.5}}}
        className="capitalize text-[30px] font-bold mb-[30px]"
      >
        portfolio
      </motion.h1>
      <motion.div className="flex flex-col gap-[70px]">
        {portfolio.map((item, index) => {
          return (
            <motion.div
              key={index}
              initial={{
                y: 200,
              }}
              whileInView={{
                y: 0,
                transition: {
                  duration: 0.5,
                },
              }}
              className={styles.portfolioItem}
            >
              <div>
                <img src={item.imageUrl} alt="img" />
              </div>
              <h1 className="text-[20px]">{item.title}</h1>
              <h6>{item.description}</h6>
              <Link to={item.url}>
                <button>view page</button>
              </Link>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
};

export default Portfolio;
