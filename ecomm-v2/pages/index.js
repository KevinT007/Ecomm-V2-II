import React from "react";
import { Products, Contact, Slider } from "../components";
import { client } from "../lib/client";

const Home = (products) => {
  return (
    <div>
      <Slider />
      {/* <PlatformBanner platformBanner={bannerData.length && bannerData[0]} /> */}
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
        <h2>Accessories Coming Soon!</h2>
      </div>
      <div className="products-container"></div>
      <Contact />
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
