import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import styles from "../styles/portfolio.module.scss";
import { Link } from "react-router-dom";
import axios from "axios";
import { portfolioItems } from "../../data.json";
import data from "../../data.json";

const Portfolio = () => {
  const [portfolio, setPortfolio] = useState(data.portfolioItems);

  return (
    <section className={styles.portfolio}>
      <motion.h1
        initial={{ x: -200 }}
        whileInView={{ x: 0, transition: { duration: 0.5 } }}
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
                opacity: 0,
              }}
              whileInView={{
                y: 0,
                opacity: 1,
                transition: {
                  duration: 0.5,
                },
              }}
              className={styles.portfolioItem}
            >
              <div>
                <div>
                  <img src={item.imageUrl} alt="img" />
                </div>
                <h1 className="text-[20px]">{item.title}</h1>
                <h6>{item.description}</h6>
              </div>
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
