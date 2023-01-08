import React from "react";

import { Products, Footer, HeroBanner } from "../components";
const Home = () => {
  return (
    <div>
      <HeroBanner />
      <div className="products-heading">
        <h2>Best Selling Games</h2>
        <p>New games</p>
      </div>
      <div className="products-container">
        {["Product 1", "Product 2"].map((product) => product)}
      </div>
      <Footer />
    </div>
  );
};

export default Home;
