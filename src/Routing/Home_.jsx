import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <span>Home</span>
      <br></br>
      <Link to="/About">About</Link>
    </>
  );
}

export default Home;
