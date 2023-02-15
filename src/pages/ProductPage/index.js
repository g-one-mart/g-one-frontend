import "./index.css";
import { useLocation } from "react-router-dom";
import CardContainer from "../../components/CardContainer";
import { discountCalculator } from "../../discountCalculator";
// import React, { useEffect, useState } from "react";
const Component = () => {
  const location = useLocation();
  const product = location.state;
  function saveProduct() {
    let data = {
      productId: product._id,
      userId: "abcsdgga",
      name: product.name,
      imgUrl: product.imgUrl,
      itemCount: 5,
      originalPrice: product.originalPrice,
      priceAfterDiscount: product.priceAfterDiscount
    }
    fetch("http://localhost:4000/add-to-cart", {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then(response => {
      console.log("respone", response)
    }).catch(e => {
      console.log("e", e)
    })
  }
  return (
    <>
      <div className="productPage">
        <div className="productImg">
          <img
            src={product.imgUrl}
            alt={product}
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div className="productDetails">
          <h4  >{product.name}</h4>
          <div className="itemSold">Item sold : 44</div>
          <div style={{ display: "flex", alignItems: "flex-end", gap: "4px" }}>
            <div style={{ fontSize: "26px", fontWeight: "500" }}>
              ₹{product.priceAfterDiscount}
            </div>
            <div
              style={{
                fontWeight: "500",
                color: "gray",
                fontSize: "16px",
                marginBottom: "6px",
              }}>
              <strike>₹{product.originalPrice}</strike>
              &nbsp;
              <span style={{ color: "green" }}>
                {discountCalculator(
                  product.originalPrice,
                  product.priceAfterDiscount
                )}
                % Off
              </span>
            </div>
          </div>

          <div className="productDetailsFeatures">
            <div>Free Delivery</div>
            <div>1 year warranty</div>
          </div>
          <div className="productDetailsFeatures">
            <div>7 days replacement</div>
          </div>

          <button type="button" onClick={saveProduct} className="addToCartButton">Add to Cart</button>
        </div>
      </div>
      <CardContainer />
    </>
  );
};

export default Component;
