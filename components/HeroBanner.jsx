import React from "react";
import Link from "next/link";

import { urlFor } from "../lib/client";

const HeroBanner = ({ heroBanner }) => {
  return (
    <div className="hero-banner-container">
      <div>
        <p className="hero-banner-text">{heroBanner.largeText1}</p>
        <p className="hero-banner-text">{heroBanner.largeText2}</p>
        <p className="beats-solo">{heroBanner.smallText}</p>
        <div className="image-container">
          <div className="ball">
            <div className="inner-circle1">
              <div className="inner-circle2">
                <div className="inner-circle3">
                  <div className="inner-circle4" />
                </div>
              </div>
            </div>
          </div>
          <img
            src={urlFor(heroBanner.image)}
            alt="headphones"
            className="hero-banner-image"
          />
        </div>

        <div>
          <Link href={`/product/${heroBanner.product}`}>
            <button type="button">{heroBanner.buttonText}</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
