import React from "react";
import { useState } from "react";
import './index.css';

const Component = () => {
// const [email, setEmial] = useState("");
// const [password,setPassword] = useState("");

// const [allEntry, setAllEntry] = useState([]);

//  const submitForm = ()=>{
//     const newEntry = {emial: email, password: password,  };
//     setAllEntry([...allEntry, newEntry]);
//  }
   const Loginwithgoogle=()=>{
        alert("clicked me!")
   }
    return (
        <>
        
           {/* <form action="" onSubmit={submitForm} className="form">
           <div className="Login">
            <p>Login Here</p>
        </div>
        <div>
            
                
    
                <input type="email"  className="mail" name="email" autoComplete="off" 
                value={email}
                onChange={(e)=> setEmial(e.target.value)}
                placeholder="Enter Email"
                />
            
                <input type="password" className="pass" name="password" id="password" autoComplete="off"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                placeholder="Enter Password"
                />
            </div>
            
            <button type="submit" className="butt">Login</button>
            
             */}
            <div className='alt-login'>

            <button className='google' onClick={Loginwithgoogle}></button>
           
            </div>
           {/* </form> */}
        </>
    );

}

export default Component;
