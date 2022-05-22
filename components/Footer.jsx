import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="text-block-1">
        <div className="footer-logo">
          <Link href="/">
            <h3>
              Fabby<span>Stich.</span>
            </h3>
          </Link>
        </div>
        <p className="free-text">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius magnam
          itaque sequi quos exercitationem nostrum dolores quidem omnis ipsam
          magni?
        </p>
      </div>

      <div className="text-block">
        <h5 className="small-footer-title">Information Company</h5>
        <ul>
          {[
            "About Us",
            "Our Impact",
            "Digital Payments",
            "Membership",
            "Terms & Conditions",
          ].map((item, i) => (
            <div key={i}>
              <li>
                <a href="#">{item}</a>
              </li>
            </div>
          ))}
        </ul>
      </div>

      <div className="text-block">
        <h5 className="small-footer-title">Account</h5>
        <ul>
          {[
            "FAQ",
            "Track Your Order",
            "Returns & Refunds",
            "Take Our Feedback",
            "Contact Us",
          ].map((item, i) => (
            <div key={i}>
              <li>
                <a href="#">{item}</a>
              </li>
            </div>
          ))}
        </ul>
      </div>

      <div className="text-block">
        <h5 className="small-footer-title">Info</h5>
        <ul>
          {[
            "Terms & Conditions",
            "Privacy Policy",
            "Sitemap",
            "Privacy Policy",
            "Sitemap",
          ].map((item, i) => (
            <div key={i}>
              <li>
                <a href="#">{item}</a>
              </li>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Footer;
