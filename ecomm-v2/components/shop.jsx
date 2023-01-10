import React from "react";
import Link from "next/link";
import { urlFor } from "../lib/client";

const Shop = ({ product: { image, name, slug, price } }) => {
  return (
    <div>
      <div>
        <h2>Here's Our Games</h2>
        <Link href={`/Shop/${slug.current}`}>
          <div className="product-card">
            <img
              src={urlFor(image && image[0])}
              width={250}
              height={250}
              className="product-image"
            />
            <p className="product-name">{name}</p>
            <p className="product-price">${price}</p>
            <p className="product-deatils">{detail}</p>
          </div>
        </Link>
      </div>
    </div>
  );
};
export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);
  return {
    props: { products },
  };
};

export default Shop;
