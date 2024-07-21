// src/App.js
import React from "react";
import { useNavigate } from "react-router-dom";
import backgroundImage from "./images/pexels-shvets-production-7176317.jpg";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SearchForm from "./components/search/SearchForm";
import JobGrid from "./components/JobGrid";

const Home = () => {
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate("/search");
  };

  return (
    <div
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), #00A36C), url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "120vh",
        display: "flex",
        flexDirection: "column",
        margin: 0,
        padding: 0,
      }}
    >
      <Header />
      <SearchForm />
      <JobGrid />
      <Footer />
    </div>
  );
};

export default Home;
