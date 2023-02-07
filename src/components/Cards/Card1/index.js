import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { discountCalculator } from "../../../discountCalculator.js";
import "./index.css";

const Component = (props) => {
  const [product, setProduct] = useState({
    name: "Loading..",
    originalPrice: "Loading..",
    priceAfterDiscount: "Loading..",
    imgUrl: "Loading..",
  });

  useEffect(() => {
    setProduct(props.product);
  }, []);

  return (
    <>
      <Link
        to={"/product"}
        state={product}
        style={{ textDecoration: "none", color: "black" }}>
        <div className="card1">
          <div style={{ padding: "10px 10px 10px 10px" }}>
            <img
              src={product.imgUrl}
              alt="product"
              style={{ width: "100%", height: "100%" }}
            />
          </div>
          <div className="cardTitle">
            <h5>{product.name}</h5>
          </div>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "20px",
              marginTop: "4px",
            }}>
            <div
              style={{ color: "white", padding: "4px 14px" }}
              className="discountTag">
              {discountCalculator(
                product.originalPrice,
                product.priceAfterDiscount
              )}
              %
            </div>
            <div style={{ marginRight: "20px" }}>
              <span style={{ fontSize: "24px", fontWeight: "600" }}>
                ₹{product.priceAfterDiscount}
              </span>
              &nbsp;
              <span style={{ fontSize: "18px", color: "rgba(100,100,100)" }}>
                <strike>₹{product.originalPrice}</strike>
              </span>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Component;
