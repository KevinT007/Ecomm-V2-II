import React from "react";
import Link from "next/link";

const Products2 = () => {
  return (
    <div>
      <Link href={`/products/`}>
        <div className="product-card-gear">
          <div className="gear">
            <img
              src=""
              width={250}
              height={250}
              className="product-image-gear"
            />
            <p className="product-name"></p>
            <p className="product-price">$69.99</p>
          </div>
          <div className="gear">
            <img
              src="/Users/KevinT/Documents/GitHub/Ecomm-V2-II/ecomm-v2/styles/assets/headphones.jpg"
              width={250}
              height={250}
              className="product-image-gear"
            />
            <p className="product-name"></p>
            <p className="product-price">$69.99</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Products2;
