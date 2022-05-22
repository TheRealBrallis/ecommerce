import React from "react";
import { BiLockAlt, BiSupport } from "react-icons/bi";
import { RiTruckLine } from "react-icons/ri";
import { GiReceiveMoney } from "react-icons/gi";

const Info = () => {
  return (
    <div className="info-container">
      <div className="info-item">
        <RiTruckLine />
        <div>
          <p className="title-text">Free Shipping</p>
          <p className="sub-text">Free Shipping over $100</p>
        </div>
      </div>

      <div className="info-item">
        <BiLockAlt />
        <div>
          <p className="title-text">Secure Payment</p>
          <p className="sub-text">100% secure payment</p>
        </div>
      </div>

      <div className="info-item">
        <GiReceiveMoney />
        <div>
          <p className="title-text">Money Return</p>
          <p className="sub-text">30 days money back guarantee</p>
        </div>
      </div>

      <div className="info-item">
        <BiSupport />
        <div>
          <p className="title-text">24/7 Support</p>
          <p className="sub-text">Support 24 hours a day</p>
        </div>
      </div>
    </div>
  );
};

export default Info;
