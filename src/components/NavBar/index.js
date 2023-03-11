import { Link } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useLogin } from "../../hooks/useLogin";
import { useLogout } from "../../hooks/useLogout";
import "./index.css";

const Component = () => {
  const { login, isloading } = useLogin();
  const { logout } = useLogout();
  const { user } = useAuthContext();
  return (
    <>
      <div className="navBar">
        <div>
          <Link to={"/"}>
            <img src="logo.png" alt="logo" width="50px" height="50px" />
          </Link>
        </div>
        <div className="searchBox">
          <div>
            <input
              type="text"
              className="searchInput"
              placeholder="Search products, brands..."
            />
          </div>
          <div>
            <button className="searchButton">
              <i className="fa fa-search" aria-hidden="true"></i>
            </button>
          </div>
        </div>
        {user ? (
          <div>
            <Link to={"/user/profile"}>
              <i className="fa fa-user fa-2x" aria-hidden="true"></i>
            </Link>
            <button onClick={() => logout()}>Logout</button>
          </div>
        ) : (
          <div>
            <button disabled={isloading} onClick={() => login()}>
              Login
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Component;
