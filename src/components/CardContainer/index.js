import { useEffect, useState } from "react";
import { fetchAllProducts } from "../../api/index";
import Card1 from "../Cards/Card1";
import "./index.css";

const Component = () => {
  const [products, setProducts] = useState([]);
  const fetchProduct = async () => {
    const { data } = await fetchAllProducts();
    return setProducts(data.result);
  };
  useEffect(() => {
    fetchProduct();
  }, []);

  if (!products) return <div>Locading...</div>;

  return (
    <>
      <div className="cardContainer-div">
        <h3 style={{ marginLeft: "10px" }}>Electronics</h3>
        <hr />
        <div className="cardContainer">
          {products.map((product) => (
            <Card1 key={product._id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Component;
