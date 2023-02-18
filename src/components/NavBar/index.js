import { Link } from "react-router-dom";
import "./index.css";
import {useState} from 'react'
import LoginPage from '../../pages/LoginPage';

const Component = () => {
 const [open,setopen]=useState(false)
  return (
    <>
    
      <div className="navBar">
        <div>
          <Link to={"/"}>
            <img src="logo.jpeg" alt="logo" width="50px" height="50px" />
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
              <i class="fa fa-search" aria-hidden="true"></i>
            </button>
          </div>
        </div>
        <div>
          <i class="fa fa-user fa-2x" aria-hidden="true"></i>
        </div>
        <div className="Loginwidth">
          
          <button className="loginwithgoogle"
          onClick={()=>{setopen(true)}}>Login</button>

          {open&&<LoginPage />}
         
        </div>
      </div>
    </>
  );
};

export default Component;
