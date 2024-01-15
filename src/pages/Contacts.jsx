import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import styles from "../styles/contacts.module.scss";
import { MdEmail } from "react-icons/md";
import { FaPhone, FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const Contacts = () => {
  const [successMessage, setSuccessMessage] = useState(false);

  const scriptURL =
    "https://script.google.com/macros/s/AKfycbxNM6jOV7cbj2buUEl-ec8MEfozE6pcV_cSG_BwzOtdTLX5ZBhG4-lI4coVD7ZmugA/exec";

  const schema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    message: yup.string().min(10).required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      const response = await fetch(scriptURL, {
        method: "POST",
        body: FormData,
      });

      if (response.ok) {
        setSuccessMessage(true);
        console.log("Form submitted successfully!");
        setTimeout(() => {
          setSuccessMessage(false);
        }, 5000);
      } else {
        console.error("Error submitting form:", response.statusText);
      }
    } catch (error) {
      console.error("Error submitting form:", error.message);
    }
    console.log(data);
    console.log("functionality will add soon");
  };

  return (
    <motion.div className={styles.contacts}>
      <motion.h1
        initial={{ x: -200 }}
        whileInView={{ x: 0, transition: { duration: 0.5 } }}
      >
        contacts
      </motion.h1>
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
        className={styles.contactsContent}
      >
        <div className={styles.contactsInfo}>
          {" "}
          <div className="flex items-center gap-[10px]">
            <MdEmail
              color="red"
              size={20}
              className="xl:size-[40px] lg:size-[30px]"
            />
            <span>nikagvarliani5@gmail.com</span>
          </div>
          <div className="flex items-center gap-[10px]">
            <FaPhone
              color="red"
              size={20}
              className="xl:size-[40px] lg:size-[30px]"
            />
            <span>+995 591 93 36 98</span>
          </div>
          <div className="flex gap-[10px]">
            <FaFacebook
              color="red"
              size={20}
              className="xl:size-[40px] lg:size-[30px]"
            />
            <FaInstagram
              color="red"
              size={20}
              className="xl:size-[40px] lg:size-[30px]"
            />
            <FaLinkedin
              color="red"
              size={20}
              className="xl:size-[40px] lg:size-[30px]"
            />
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <input type="text" placeholder="Name" {...register("name")} />
          <p>{errors.name?.message}</p>
          <input type="text" placeholder="E-mail" {...register("email")} />
          <p>{errors.email?.message}</p>
          <textarea
            name="message"
            cols="30"
            rows="4"
            placeholder="Message"
            {...register("message")}
          ></textarea>
          <p>{errors.message?.message}</p>
          {successMessage && (
            <span className="text-green-500">Message sent succesfully!</span>
          )}
          <input type="submit" />
        </form>
      </motion.div>
    </motion.div>
  );
};

export default Contacts;
