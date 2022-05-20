import React, { useState } from "react";
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiFillStar,
  AiOutlineStar,
} from "react-icons/ai";

import { client, urlFor } from "../../lib/client";
import { Product } from "../../components";
// import { useStateContext } from '../../context/StateContext';

const ProductDetails = ({ product, products }) => {
  const { image, name, price, description, sizes, details, color, detailInfo } =
    product;
  const [index, setIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState("S");
  const [selectedView, setSelectedView] = useState("desc");
  // const { decQty, incQty, qty, onAdd, setShowCart } = useStateContext();

  // const handleBuyNow = () => {
  //   onAdd(product, qty);

  //   setShowCart(true);
  // }

  return (
    <div>
      <div className="product-detail-container">
        <div className="product-detail-flex-container">
          <div className="small-images-container">
            {image?.map((item, i) => (
              <img
                key={i}
                src={urlFor(item)}
                className={
                  i === index ? "small-image selected-image" : "small-image"
                }
                onMouseEnter={() => setIndex(i)}
              />
            ))}
          </div>
          <div className="image-container">
            <img
              src={urlFor(image && image[index])}
              className="product-detail-image"
            />
          </div>
        </div>

        <div className="product-detail-desc">
          <h1>{name}</h1>
          <p className="product-description">{description}</p>
          <p className="price">${price}</p>

          <div className="product-details-container">
            <div className="product-detail-row">
              <p className="detail-title">Color</p>
              <p>:</p>
              <p>{color}</p>
            </div>

            <div className="product-detail-row">
              <p className="detail-title">Size</p>
              <p>:</p>
              <div className="product-size-container">
                {sizes?.map((size) => (
                  <div
                    className={
                      size === selectedSize
                        ? "product-size product-size-selected"
                        : "product-size"
                    }
                    onClick={() => setSelectedSize(size)}
                  >
                    <p>{size}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="quantity product-detail-row">
              <p className="detail-title">Quantity</p>
              <p>:</p>
              <p className="quantity-desc">
                <span className="minus" onClick="">
                  <AiOutlineMinus />
                </span>
                <span className="num">0</span>
                <span className="plus" onClick="">
                  <AiOutlinePlus />
                </span>
              </p>
            </div>

            <div className="product-detail-row">
              <p className="detail-title">Available</p>
              <p>:</p>
              <p>In stock</p>
            </div>
          </div>
          <div className="buttons">
            <button type="button" className="add-to-cart" onClick="">
              Add to Cart
            </button>
            <button type="button" className="buy-now" onClick="">
              Buy Now
            </button>
          </div>
        </div>
      </div>

      <div className="product-info">
        <button
          type="button"
          className={
            selectedView === "desc"
              ? "product-info-button product-info-button-selected"
              : "product-info-button"
          }
          onClick={() => setSelectedView("desc")}
        >
          Product Description
        </button>
        <button
          type="button"
          className={
            selectedView === "details"
              ? "product-info-button product-info-button-selected"
              : "product-info-button"
          }
          onClick={() => setSelectedView("details")}
        >
          Product Details
        </button>
        <button
          type="button"
          className={
            selectedView === "review"
              ? "product-info-button product-info-button-selected"
              : "product-info-button"
          }
          onClick={() => setSelectedView("review")}
        >
          Product Review
        </button>

        <div
          className={selectedView === "desc" ? "product-info-desc" : "hidden"}
        >
          {description}
        </div>

        <div
          className={
            selectedView === "details" ? "product-info-details" : "hidden"
          }
        >
          {details?.map((detail) => (
            <div className="detail-row">
              <p>{detail.title}</p>
              <p>{detail.info}</p>
            </div>
          ))}
        </div>

        <div
          className={
            selectedView === "review" ? "product-info-review" : "hidden"
          }
        >
          <div className="reviews">
            <div>
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
            </div>
            <p>(20)</p>
          </div>
        </div>
      </div>
      <div className="maylike-products-wrapper">
        <h2>You may also like</h2>
        <div className="marquee">
          <div className="maylike-products-container track">
            {products.map((item) => (
              <Product key={item._id} product={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export const getStaticPaths = async () => {
  const query = `*[_type == "product"] {
    slug {
      current
    }
  }
  `;

  const products = await client.fetch(query);

  const paths = products.map((product) => ({
    params: {
      slug: product.slug.current,
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
  const productsQuery = '*[_type == "product"]';

  const product = await client.fetch(query);
  const products = await client.fetch(productsQuery);

  console.log(product);

  return {
    props: { products, product },
  };
};

export default ProductDetails;
