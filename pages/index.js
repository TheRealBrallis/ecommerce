import React from "react";

import { client } from "../lib/client";
import {
  Product,
  FooterBanner,
  HeroBanner,
  Info,
  SaleBanner,
  TrendingBanner,
} from "../components";

const Home = ({ products, bannerData }) => {
  console.log(bannerData)
  return (
    <>
      <HeroBanner heroBanner={bannerData.length && bannerData[4]} />
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

      <TrendingBanner trendingBanner={bannerData.length && bannerData}/>

      <div className="products-heading">
        <p>Best Seller Products</p>
        <p>Top view in this week</p>
      </div>

      <div className="products-container">
        {products?.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>

      <FooterBanner footerBanner={bannerData.length && bannerData[5]}/>
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
