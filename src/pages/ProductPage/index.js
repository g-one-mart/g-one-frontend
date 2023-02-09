import "./index.css";
import { useLocation } from "react-router-dom";
import CardContainer from "../../components/CardContainer";
import { discountCalculator } from "../../discountCalculator";
const Component = () => {
  const location = useLocation();
  const product = location.state;
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
          <h4>{product.name}</h4>
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

          <button className="addToCartButton">Add to Cart</button>
        </div>
      </div>
      <CardContainer />
    </>
  );
};

export default Component;
