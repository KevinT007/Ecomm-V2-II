import React from "react";
import Link from "next/link";

const Slider = ({ banner }) => {
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
        <p className="slider-text">Shop Now</p>
        <h3>Featured</h3>
        <h3>Games</h3>
        <h1>Have Fun!</h1>
        <Link href={"./products"}>
          <button type="button">Start</button>
        </Link>
        <div className="desc">
          <h5>Also Sale Assessories!</h5>
        </div>
      </div>
    </div>
  );
};

export default Slider;
