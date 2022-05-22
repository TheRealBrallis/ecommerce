import React from "react";
import Link from "next/link";
import { urlFor } from "../lib/client";

const TrendingBanner = ({ trendingBanner }) => {
  return (
    <div className="trend-banner-container">
      <div className="trend-left">
        <p className="trend-text">{trendingBanner[2]?.largeText1}</p>
        <p className="trend-text">{trendingBanner[2]?.largeText2}</p>
        <img
          src={urlFor(trendingBanner[2].image)}
          alt="man"
          className="trend-banner-image"
        />

        <div>
          <Link href={`/product/${trendingBanner[2]?.product}`}>
            <button type="button" className="trend-button">
              {trendingBanner[2]?.buttonText}
            </button>
          </Link>
        </div>
      </div>
      <div
        className="trend-right"
        style={{ backgroundImage: `url(${urlFor(trendingBanner[1].image)})` }}
      >
        <p className="trend-text">{trendingBanner[1]?.largeText1}</p>
        <p className="trend-text">{trendingBanner[1]?.largeText2}</p>
        <p className="trend-text">{trendingBanner[1]?.midText}</p>
        <div>
          <Link href={`/product/${trendingBanner[1]?.product}`}>
            <button type="button" className="trend-button">
              {trendingBanner[1]?.buttonText}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TrendingBanner;
