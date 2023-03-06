import { Navigate, Route, Routes } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthContext";
import CartPage from "../CartPage";
import HomePage from "../HomePage";
import ProductPage from "../ProductPage";
import ProfilePage from "../ProfilePage";
import "./index.css";

const Component = () => {
  const { user } = useAuthContext();
  return (
    <>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route
          path="/cart"
          element={user ? <CartPage /> : <Navigate to="/" />}
        />
        <Route
          path="/user/profile"
          element={user ? <ProfilePage /> : <Navigate to="/" />}
        />
      </Routes>
    </>
  );
};

export default Component;
