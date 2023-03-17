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
      <nav className="navbar navbar-expand-lg bg-body-tertiary navBar">
        <div className="container-fluid">
          <div className="navbar-brand">
            <Link to={"/"}>
              <img src="logo.png" alt="logo" width="50px" height="50px" />
            </Link>
          </div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse collnav" id="navbarScroll">
            <ul className="navbar-nav navbar-nav-scroll">
              <li className="nav-item">
                <div className="searchBox">
                  <div className="searchBoxlength">
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
              </li>
            </ul>
            <div className="usericonpos">
              {user ? (
                <div className="useicons">
                  <Link to={"/user/profile"}>
                    <i className="fa fa-user fa-2x usericon" aria-hidden="true"></i>
                  </Link>
                  <button onClick={() => logout()} className="btn usericonbutton">Logout</button>
                </div>
              ) : (
                <div className="usericonof">
                  <button disabled={isloading} onClick={() => login()} className="btn usericonbutton">
                    Login
                  </button>
                </div>
              )}
            </div>
            <div className="nav-item carticon">
              <i className="fa fa-shopping-cart fa-2x" aria-hidden="true"></i>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Component;



      