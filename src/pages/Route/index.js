import { Route, Routes } from "react-router-dom";
import CartPage from "../CartPage";
import HomePage from "../HomePage";
import ProductPage from "../ProductPage";
import ProfilePage from "../ProfilePage";
import "./index.css";

const Component = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/user/profile" element={<ProfilePage />} />
      </Routes>
    </>
  );
};

export default Component;
