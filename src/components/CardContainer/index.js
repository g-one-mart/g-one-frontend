import { useEffect, useState } from "react";
import axios from "axios";
import "./index.css";
import Card1 from "../Cards/Card1";

const Component = () => {
  const [products, setProducts] = useState([]);
  const fetchProduct = () => {
    return axios
      .get("http://localhost:4000/getAllProducts")
      .then((response) => setProducts(response.data));
  };
  useEffect(() => {
    fetchProduct();
  }, []);

  // var products =[
  //     {name:"Boat Headset",
  //       originalPrice:"900",
  //       priceAfterDiscount:"599" ,
  //       imgUrl:"https://cdn.shopclues.com/images1/thumbnails/112930/320/320/151885535-112930695-1653064733.jpg"
  //     },
  //     {name:"Boat Headset",
  //       originalPrice:"900",
  //       priceAfterDiscount:"599" ,
  //       imgUrl:"https://cdn.shopclues.com/images1/thumbnails/112930/320/320/151885535-112930695-1653064733.jpg"
  //     },
  //     {name:"Boat Headset",
  //       originalPrice:"900",
  //       priceAfterDiscount:"599" ,
  //       imgUrl:"https://cdn.shopclues.com/images1/thumbnails/112930/320/320/151885535-112930695-1653064733.jpg"
  //     },
  //     {name:"Boat Headset",
  //       originalPrice:"900",
  //       priceAfterDiscount:"599" ,
  //       imgUrl:"https://cdn.shopclues.com/images1/thumbnails/112930/320/320/151885535-112930695-1653064733.jpg"
  //     },
  //     {name:"Boat Headset",
  //       originalPrice:"900",
  //       priceAfterDiscount:"599" ,
  //       imgUrl:"https://cdn.shopclues.com/images1/thumbnails/112930/320/320/151885535-112930695-1653064733.jpg"
  //     }
  // ];

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
