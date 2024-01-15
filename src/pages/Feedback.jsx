import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import styles from "../styles/feedback.module.scss";
import "swiper/css";
import "swiper/css/navigation";
import { FaUserCircle } from "react-icons/fa";

const Feedback = () => {
  const [users, setUsers] = useState([]);
  const fetchUsers = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    setUsers(response.data);
  };
  useEffect(() => {
    fetchUsers();
  }, []);
  return (
    <motion.section className={styles.feedback}>
      <motion.h1
       initial={{ x: -200 }}
       whileInView={{ x: 0, transition: { duration: 0.5 } }}>profile views</motion.h1>
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
      >
        <Swiper
          navigation={true}
          modules={[Navigation]}
          className="mySwiper w-[100%]"
        >
          {users.map((user, index) => {
            const { name, username, company, email, phone, website } = user;
            return (
              <SwiperSlide key={index} className={styles.user}>
                <div>
                  <FaUserCircle size={100} />
                </div>
                <h1>{name}</h1>
                <h2>username : {username}</h2>
                <h2>company : {company.name}</h2>
                <h2>email : {email}</h2>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </motion.div>
    </motion.section>
  );
};

export default Feedback;
