import { Navigate, Route, Routes } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthContext";
import CartPage from "../CartPage";
import HomePage from "../HomePage";
import ProductPage from "../ProductPage";
import ProfilePage from "../ProfilePage";
import OrdersPage from "../OrdersPage";
import CheckoutPage from "../CheckoutPage";
import "./index.css";

const Component = () => {
  const { isLoggedIn, loading } = useAuthContext();
  if (loading) return <div>Loading...</div>;
  return (
    <>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route
          path="/cart"
          element={isLoggedIn ? <CartPage /> : <Navigate to="/" />}
        />
        <Route
          path="/user/profile"
          element={isLoggedIn ? <ProfilePage /> : <Navigate to="/" />}
        />
        <Route path="/orders" element={<OrdersPage/>} />
        <Route path="/checkout" element={<CheckoutPage/>} />
      </Routes>
    </>
  );
};

export default Component;
