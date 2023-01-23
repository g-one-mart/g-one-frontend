// import "./index.css"
import {useEffect} from 'react';

const Component = () =>{
    function handleCallbackResponse(response){
        console.log("encoded jwt tocken: " +response.credential);
        var userObject=response.credential;
     }
     useEffect(()=>{
         /*global google*/
         google.accounts.id.initialize({
             client_id:"76169515596-ub0s5tirrko50i6u8ka4n00mbgd83p9v.apps.googleusercontent.com",
             callback:handleCallbackResponse
         });
         google.accounts.id.renderButton(
             document.getElementById("signInDiv"),
             {theme:"outline",size:"large"}
         );
     },[]);
     return(
         <div className="App">
             <div id="signInDiv"></div>
         </div>
     );
}

export default Component;