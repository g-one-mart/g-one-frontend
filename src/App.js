import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import NavBar from "./components/NavBar";
import Route from "./pages/Route";
// import Home from "./pages/HomePage";
// import ProductPage from "./pages/ProductPage";

const Component = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Route />
    </BrowserRouter>
  );
};

export default Component;
