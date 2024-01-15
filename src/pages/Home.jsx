import React from "react";
import Banner from "../components/banner/Banner";
import Portfolio from "./Portfolio";
import About from "./About";
import Contacts from "./Contacts";
import Feedback from "./Feedback";

const Home = () => {
  return (
    <div className="flex flex-col ">
      <Banner />
      <Portfolio />
      <About />
      <Contacts />
      <Feedback />
    </div>
  );
};

export default Home;
