import React from "react";
import Link from "next/link";
import { urlFor } from "../lib/client";

const SaleBanner = ({ saleBanner }) => {
  return (
    <div className="sale-banner-container">
      <div className="sale-offer">
        <p className="sale-text">{saleBanner[1]?.largeText1}</p>
        <p className="sale-text">{saleBanner[1]?.largeText2}</p>
        <img
          src={urlFor(saleBanner[1]?.image)}
          alt="Lady"
          className="sale-banner-image"
        />

        <div>
          <Link href={`/product/${saleBanner[1]?.product}`}>
            <button type="button">{saleBanner[1]?.buttonText}</button>
          </Link>
        </div>
      </div>

      <div className="new-arrivals">
        <p className="sale-text">{saleBanner[0]?.largeText1}</p>
        <p className="sale-text">{saleBanner[0]?.largeText2}</p>
        <img
          src={urlFor(saleBanner[2]?.image)}
          alt="Lady"
          className="arrival-banner-image"
        />

        <div>
          <Link href={`/product/${saleBanner[0]?.product}`}>
            <button type="button">{saleBanner[0]?.buttonText}</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SaleBanner;
