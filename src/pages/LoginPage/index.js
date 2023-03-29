import { Link } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useLogin } from "../../hooks/useLogin";
import { useLogout } from "../../hooks/useLogout";
import "./index.css";

const LoginPage = () => {
     const { login, isloading } = useLogin();
     const { logout } = useLogout();
     const { user } = useAuthContext();
     return (
          <>
               <div className="container-fluid">
                    <div className="usericonposp">
                         {user ? (
                              <div className="useicons">
                                   <Link to={"/user/profile"}>
                                        <i className="fa fa-user fa-2x usericon" aria-hidden="true"></i>
                                   </Link>
                                   <button onClick={() => logout()} className="btn usericonbuttonp">
                                        Logout
                                   </button>
                              </div>
                         ) : (
                              <div className="usericonof">
                                   <button disabled={isloading} onClick={() => login()} className="btn usericonbuttonp">
                                        Login
                                   </button>
                              </div>
                         )}
                    </div>
               </div>
          </>
     );
};

export default LoginPage;



      