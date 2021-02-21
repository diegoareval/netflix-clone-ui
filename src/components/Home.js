import React from "react";
import Footer from "../layout/Footer";
import Header from "../layout/Header";
import Social from "../layout/Social";
import Content from "./Content";
import "./home.css";

const Home = ({ change }) => {
  return (
    <div className="wrapper">
      <Header change={change} />
      <Content />
      <Social />
      <Footer />
    </div>
  );
};

export default Home;
