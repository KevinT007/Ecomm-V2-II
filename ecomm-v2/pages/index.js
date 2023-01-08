import React from "react";

import { Products, Footer, Slider } from "../components";
import { client } from "../lib/client";

const Home = () => {
  return (
    <div>
      <Slider />
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

// export const getServerSideProps = async () => {
//   const query = '*[_type == "product"]';
//   const products = await client.fetch(query);

//   const bannerQuery = '*[_type == "banner"]';
//   const bannerData = await client.fetch(bannerQuery);

//   return {
//     props: { products, bannerData },
//   };
// };

export default Home;
