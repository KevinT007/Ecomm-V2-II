import React from "react";

import { Products, Footer, Slider, Products2 } from "../components";
import { client } from "../lib/client";

const Home = (products, products2) => {
  return (
    <div>
      <Slider />

      <div className="products-heading">
        <h2>Best Selling Games</h2>
        <p>Hot Sale!</p>
      </div>
      <div className="products-container">
        {products?.products.map((products) => (
          <Products key={products._id} product={products} />
        ))}
      </div>
      <div className="products-heading">
        <h2>Now Selling Assessories</h2>
        <p>New Gamer Gear</p>
        <div className="products-container">
          <Products2 key={products._id} product2={products} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData },
  };
};

export default Home;
