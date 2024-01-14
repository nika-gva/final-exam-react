import React from "react";
import Banner from "../components/banner/Banner";
import Portfolio from "./Portfolio";
import About from "./About";

const Home = () => {
  return (
    <div className="flex flex-col gap-[80px]">
      <Banner />
      <Portfolio />
      <About />
    </div>
  );
};

export default Home;
