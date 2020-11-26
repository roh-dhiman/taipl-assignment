import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Link to="/resources">
      <button>Browse Colours</button>
    </Link>
  );
};

export default Home;
