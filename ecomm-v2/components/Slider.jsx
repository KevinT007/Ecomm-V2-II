import React from "react";
import Link from "next/link";

const Slider = () => {
  return (
    <div className="slider-container">
      <div>
        <div className="crossfade">
          <figure></figure>
          <figure></figure>
          <figure></figure>
          <figure></figure>
          <figure></figure>
        </div>
        <p className="slider-text"> SMALL TEXT</p>
        <h3>Mid Text</h3>
        <Link href={"./products"}>
          <button type="button">Start</button>
        </Link>
      </div>
    </div>
  );
};

export default Slider;
