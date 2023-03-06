import "bootstrap/dist/css/bootstrap.min.css";
import AuthVerify from "./common/AuthVerify";
import NavBar from "./components/NavBar";
import { useLogout } from "./hooks/useLogout";
import "./index.css";
import Route from "./pages/Route";
// import Home from "./pages/HomePage";
// import ProductPage from "./pages/ProductPage";

const Component = () => {
  const { logout } = useLogout();
  return (
    <>
      <NavBar />
      <Route />
      <AuthVerify logout={logout} />
    </>
  );
};

export default Component;
