import React from "react";

import { client } from "../lib/client";
import {
  Product,
  FooterBanner,
  HeroBanner,
  Info,
  SaleBanner,
} from "../components";

const Home = ({ products, bannerData }) => {
  return (
    <>
      <HeroBanner heroBanner={bannerData.length && bannerData[2]} />
      <Info />
      <SaleBanner saleBanner={bannerData.length && bannerData} />

      <div className="products-heading">
        <p>Our Products In Store</p>
        <p>Top view in this week</p>
      </div>

      <div className="products-container">
        {products?.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>

      <FooterBanner />
    </>
  );
};

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData },
  };
};

export default Home;
