import React from "react";
import Header from "../components/Header/Header";
import Carrousels from "../components/Carrousels/Carrousels";
import ApplicationCards from "../components/ApplicationCards/ApplicationCards";
import Footer from "../components/Footer/Footer";
import Grids from "../components/Grids/Grids";
import Hero from "../components/Hero/Hero";

const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Carrousels />
      <ApplicationCards />
      <Grids />
      <Footer />
    </div>
  );
};

export default Home;
