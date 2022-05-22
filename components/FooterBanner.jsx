import React from "react";
import { urlFor } from "../lib/client";

const FooterBanner = ({ footerBanner }) => {
  return (
    <div
      className="footer-banner-container"
      style={{ backgroundImage: `url(${urlFor(footerBanner.image)})` }}
    >
      <div className="news-letter-container">
        <h3 className="news-letter-text">{footerBanner.largeText1}</h3>
        <h3 className="news-letter-text">{footerBanner.largeText2}</h3>
        <p className="news-letter-small-text">{footerBanner.smallText}</p>
        <div className="input-field">
          <input type="text" placeholder="Your Email" />
          <button type="button">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default FooterBanner;
