import { useLogin } from "../../hooks/useLogin";
import "./index.css";

const LoginPage = () => {
     const { login, isloading } = useLogin();
     return (
          <>
               <div className="google-btn usericonposp" disabled={isloading} onClick={() => login()}>
                    <div className="google-icon-wrapper">
                         <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="Google"/>
                    </div>
                    <p className="btn-text">
                         <b>
                              Sign in with google
                         </b>
                    </p>
               </div>
          </>
     );
};

export default LoginPage;



      