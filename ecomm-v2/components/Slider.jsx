import React from "react";

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
        <p className="slider-text">Shop Now</p>
        <h3>Featured</h3>
        <h3>Games</h3>
        <h1>Have Fun!</h1>

        <button type="button">Start</button>

        <div className="desc">
          <h5>Assessories Coming Soon!</h5>
        </div>
      </div>
    </div>
  );
};

export default Slider;
