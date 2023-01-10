import React from "react";
import Link from "next/link";

import { urlFor } from "../lib/client";

const PlatformBanner = ({ platformBanner }) => {
  return (
    <div className="hero-banner-container">
      <div>
        <p className="banner-text">Availiable Now</p>
        <h3>{platformBanner.midText}</h3>
        <h1>{platformBanner.largeText1}</h1>
        <img
          src={urlFor(platformBanner.image)}
          alt="headphones"
          className="hero-banner-image"
        />

        <div>
          <Link href={`/Shop/${platformBanner.product}`}>
            <button type="button">Start</button>
          </Link>
          <div className="desc">
            <h5>Description</h5>
            <p>{platformBanner.desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlatformBanner;
