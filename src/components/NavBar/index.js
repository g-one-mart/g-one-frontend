import { Link } from "react-router-dom";
import "./index.css";

const Component = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-body-tertiary navBar">
        <div class="container-fluid">
          <div class="navbar-brand">
            <Link to={"/"}>
              <img src="logo.jpeg" alt="logo" width="50px" height="50px" />
            </Link>
          </div>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse collnav" id="navbarScroll">
            <ul class="navbar-nav navbar-nav-scroll">
              <li class="nav-item">
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
              <div class="nav-item carticon">
                <i className="fa fa-shopping-cart fa-2x" aria-hidden="true"></i>
              </div>
              <div class="nav-item usericon">
                <i className="fa fa-user fa-2x" aria-hidden="true"></i>
              </div>
            
          </div>
        </div>
      </nav>
    </>
  );
};

export default Component;
